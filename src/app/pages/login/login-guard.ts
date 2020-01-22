import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate() {
    if (this.authService.isTokenExpired()) {
      return true;
    }

    this.router.navigate(['']);
    return false;
  }

}
