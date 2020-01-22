import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SpinnerButtonModule } from '../../@shared';
import { LoginGuard } from './login-guard';
import { ToastContainerModule } from "ngx-toastr";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    SpinnerButtonModule,
    ToastContainerModule,
    LoginRoutingModule,
  ],
  providers: [LoginGuard],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})

export class LoginModule {
}
