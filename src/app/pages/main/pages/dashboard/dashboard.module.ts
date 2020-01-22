import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    DashboardRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})

export class DashboardModule {
}
