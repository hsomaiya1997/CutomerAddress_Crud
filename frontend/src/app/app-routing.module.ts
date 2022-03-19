import { CustomerDetailsComponent } from './Customer-details/Customer-details.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './Customer-list/Customer-list.component';
import { UpdateCustomerComponent } from './update-customer/update-Customer.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', component: CustomerListComponent },
  { path: 'add', component: CreateCustomerComponent },
  { path: 'update/:id', component: UpdateCustomerComponent },
  { path: 'details/:id', component: CustomerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
