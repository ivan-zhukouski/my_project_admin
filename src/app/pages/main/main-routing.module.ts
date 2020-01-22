import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SomeKioskComponent } from './pages/some-kiosk/some-kiosk.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'kiosks',
        loadChildren: () => import('./pages/kiosks/kiosks.module').then(m => m.KiosksModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesModule)
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'kiosks/:id',
        component: SomeKioskComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
