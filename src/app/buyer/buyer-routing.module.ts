import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CartComponent } from './cart/cart.component';

import { LoginComponent } from './login/login.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { ChangeMembershipDetailsComponent } from './change-membership-details/change-membership-details.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'my/account', component: MyaccountComponent
  },
  {
    path: 'my/orders', component: OrdersComponent
  },
  {
    path: 'change/password', component: ChangePasswordComponent
  },
  {
    path: 'change/membership/details', component: ChangeMembershipDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
