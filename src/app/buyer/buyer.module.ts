import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { OrdersComponent } from './orders/orders.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeMembershipDetailsComponent } from './change-membership-details/change-membership-details.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscriptionsPastComponent } from './subscriptions-past/subscriptions-past.component';
import { SubscriptionsCreditsComponent } from './subscriptions-credits/subscriptions-credits.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DiscountproductComponent } from './discountproduct/discountproduct.component';




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
    SubscriptionsComponent,
    SubscriptionsPastComponent,
    SubscriptionsCreditsComponent,
    PaymentComponent,
    CheckoutComponent,
    DiscountproductComponent,
  ],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class BuyerModule {

}
