import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { MatSnackBarModule } from '@angular/material';

import { AccessInterceptor, GlobalErrorInterceptor } from '@core/interceptors';
import { ApiService } from '@core/services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'inline',
      preventDuplicates: true,
    }),
    ToastContainerModule,

    // Material
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (apiService: ApiService) => () => apiService.initializeApp(),
      deps: [ApiService],
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: AccessInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorInterceptor },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
