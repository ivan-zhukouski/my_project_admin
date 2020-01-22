import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsLoggedinGuard } from '@core/guards/is-loggedin-guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [IsLoggedinGuard],
    loadChildren: './pages/main/main.module#MainModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
