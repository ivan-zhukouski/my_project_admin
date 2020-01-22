import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KiosksComponent } from './kiosks.component';

const routes: Routes = [
  { path: '', component: KiosksComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KiosksRoutingModule {
}
