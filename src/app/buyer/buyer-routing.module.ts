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
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscriptionsPastComponent } from './subscriptions-past/subscriptions-past.component';
import { SubscriptionsCreditsComponent } from './subscriptions-credits/subscriptions-credits.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DiscountproductComponent } from './discountproduct/discountproduct.component';
import { PublicFoundersComponent } from '../component/public-founders/public-founders.component';
import { PublicPeopleComponent } from '../component/public-people/public-people.component';
import { PublicStoryComponent } from '../component/public-story/public-story.component';
import { PublicFaqsComponent } from '../component/public-faqs/public-faqs.component';
import { PublicBrandVideoComponent } from '../component/public-brand-video/public-brand-video.component';
import { PublicBrandPhotosComponent } from '../component/public-brand-photos/public-brand-photos.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'my/account', pathMatch: 'full'
  },
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
  },
  {
    path: 'current/subscriptions', component: SubscriptionsComponent
  },
  {
    path: 'past/subscriptions', component: SubscriptionsPastComponent
  },
  {
    path: 'subscriptions/credits/left', component: SubscriptionsCreditsComponent
  },
  {
    path: 'checkout/:uid', component: CheckoutComponent
  },
  {
    path: 'discount/:id', component: DiscountproductComponent
  },
  {
    path: 'vendor/public/founders/:uid', component: PublicFoundersComponent,
  },
  {
    path: 'vendor/public/people/:uid', component: PublicPeopleComponent
  },
  {
    path: 'vendor/public/story/:uid', component: PublicStoryComponent
  },
  {
    path: 'vendor/public/faqs/:uid', component: PublicFaqsComponent
  },
  {
    path: 'vendor/public/brand/video/:uid', component: PublicBrandVideoComponent
  },
  {
    path: 'vendor/public/brand/photos/:uid', component: PublicBrandPhotosComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
