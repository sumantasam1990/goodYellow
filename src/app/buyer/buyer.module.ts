import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { OrdersComponent } from './orders/orders.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeMembershipDetailsComponent } from './change-membership-details/change-membership-details.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ProductComponent,
    CartComponent,
    MyaccountComponent,
    OrdersComponent,
    ChangePasswordComponent,
    ChangeMembershipDetailsComponent,
  ],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    FormsModule,
  ]
})
export class BuyerModule { }
