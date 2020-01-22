import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material';

import { SpinnerButtonComponent } from './spinner-button.component';

@NgModule({
  imports: [
    CommonModule,
    // Material modules
    MatButtonModule,
  ],
  declarations: [SpinnerButtonComponent],
  exports: [SpinnerButtonComponent],
})
export class SpinnerButtonModule {
}
