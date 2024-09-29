import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminAppComponentComponent } from './Components/super-admin.app-component/super-admin.app-component.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SettingComponent } from '../Shared/Settings/setting/setting.component';
import { UsersListComponent } from '../Shared/Users/users-list/users-list.component';
import { ProductsListComponent } from '../Shared/products/products-list/products-list.component';
import { AddProductComponent } from '../Shared/products/add-product/add-product.component';


const routes: Routes = [
  {

    path: '',
    component: SuperAdminAppComponentComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      { path: 'dashboard', component: DashboardComponent},
      { path: 'Settings',component:SettingComponent},
      { path: 'users',component:UsersListComponent},
      { path: 'products',component:ProductsListComponent},
      { path: 'add-product',component:AddProductComponent},
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
