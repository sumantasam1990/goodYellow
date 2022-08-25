import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuardBuyerService as AuthGuard} from '../services/auth-guard-buyer.service';

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
import { EmailVerificationComponent } from './email-verification/email-verification.component';


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
    path: 'email/verification/:token', component: EmailVerificationComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path: 'cart', component: CartComponent, canActivate: [AuthGuard]
  },
  {
    path: 'my/account', component: MyaccountComponent, canActivate: [AuthGuard]
  },
  {
    path: 'my/orders', component: OrdersComponent, canActivate: [AuthGuard]
  },
  {
    path: 'change/password', component: ChangePasswordComponent, canActivate: [AuthGuard]
  },
  {
    path: 'change/membership/details', component: ChangeMembershipDetailsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'current/subscriptions', component: SubscriptionsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'past/subscriptions', component: SubscriptionsPastComponent, canActivate: [AuthGuard]
  },
  {
    path: 'subscriptions/credits/left', component: SubscriptionsCreditsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'checkout/:uid', component: CheckoutComponent, canActivate: [AuthGuard]
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
