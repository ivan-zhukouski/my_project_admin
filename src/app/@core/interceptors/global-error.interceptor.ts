import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Injectable({ providedIn: 'root' })
export class GlobalErrorInterceptor implements ErrorHandler {

  constructor(private snackBar: MatSnackBar) { }

  handleError(error: Error | HttpErrorResponse) {

    if (!navigator.onLine) {
      this.showError('Browser Offline!');
    } else {
      if (error instanceof HttpErrorResponse) {
        if (!navigator.onLine) {
          this.showError(error.message);
        } else {
          // Handle Http Error (4xx, 5xx, ect.)
          this.showError('Http Error: ' + error.message);
        }
      } else {
        // Handle Client Error (Angular Error, ReferenceError...)
      }
    }
  }

  private showMessage(message: string) {
    this.snackBar.open(message, 'Dismiss', { duration: 4000 });
  }

  private showError(message: string) {
    this.snackBar.open(message, 'Dismiss', { panelClass: ['error'], duration: 10000 });
  }
}
