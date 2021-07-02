import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductResolver } from './product/product.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),

  },
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
    resolve: {
      products: ProductResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
