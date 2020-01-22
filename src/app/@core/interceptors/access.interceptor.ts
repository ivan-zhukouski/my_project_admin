import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
  HttpXsrfTokenExtractor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '@core/services/auth.service';

@Injectable()
export class AccessInterceptor implements HttpInterceptor {

  constructor(
    private tokenExtractor: HttpXsrfTokenExtractor,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = {} as any;
    const { accessToken } = this.authService.getToken();
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }
    req = req.clone({ setHeaders: headers });

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && this.router.url !== '/login') {
          this.authService.signOut();
          this.router.navigate(['login']);
        } else if (error.status === 403) {
          this.toastr.error('Forbidden!');
        } else {
          return throwError(error);
        }
        return [];
      })
    );
  }
}
