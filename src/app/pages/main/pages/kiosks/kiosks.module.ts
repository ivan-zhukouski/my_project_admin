import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KiosksComponent } from './kiosks.component';
import { KiosksRoutingModule } from './kiosks-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    KiosksRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
  ],
  declarations: [KiosksComponent],
  exports: [KiosksComponent]
})

export class KiosksModule {
}
