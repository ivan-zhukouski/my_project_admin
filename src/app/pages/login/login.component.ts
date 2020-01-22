import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, ApiService } from '@core/services';
import { catchError, finalize } from 'rxjs/operators';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;
  authForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  isFocusedMail;
  isFocusedPass;
  isError = false;
  isProcessing = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private apiService: ApiService,
    private toastrService: ToastrService,
  ) {
  }

  ngOnInit() {
    this.toastrService.overlayContainer = this.toastContainer;
  }

  get email() {
    return this.authForm.get('email');
  }

  get password() {
    return this.authForm.get('password');
  }

  signIn() {
    this.isProcessing = true;

    const { value } = this.authForm;

    this.apiService.signIn(value)
      .pipe(
        finalize(() => {
          this.isProcessing = false;
        })
      )
      .subscribe((res: any) => {
          this.authService.setPayload(res);
          this.router.navigate(['/']);
        },
        (err = {}) => {
          console.log(err);
          this.authForm.reset();
          this.isError = true;

          if (err && err.status === 401) {
            this.toastrService.error('The E-mail address or password is incorrect!');
          }
          if (err && err.status === 400) {
            this.toastrService.error('The E-mail address or password is not valid!');
          }
        });
  }
}
