import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatDividerModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

import { DialogLogoutComponent } from './header/logout-dialog/dialogLogout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { SomeKioskComponent } from './pages/some-kiosk/some-kiosk.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
    MatMenuModule,
    MatDialogModule,
    MainRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule
  ],
  entryComponents: [
    DialogLogoutComponent
  ],
  declarations: [MainComponent, DialogLogoutComponent, ProfileComponent, HeaderComponent, SomeKioskComponent ],
  exports: [MainComponent, SomeKioskComponent]
})

export class MainModule {
}
