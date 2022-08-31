import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { LoginOrNotGuardService as LoginOrNotGuard } from './services/login-or-not-guard.service';

import { ConnectStripeComponent } from './component/connect-stripe/connect-stripe.component';
import { CreateProductAttributesComponent } from './component/create-product-attributes/create-product-attributes.component';
import { CreateProductImageComponent } from './component/create-product-image/create-product-image.component';
import { CreateProductVariationsComponent } from './component/create-product-variations/create-product-variations.component';
import { CreateVendorComponent } from './component/create-vendor/create-vendor.component';
import { CreateleaderboardComponent } from './component/createleaderboard/createleaderboard.component';
import { CreateproductComponent } from './component/createproduct/createproduct.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { LeaderboardsComponent } from './component/leaderboards/leaderboards.component';
import { LoginComponent } from './component/login/login.component';
import { OrdersComponent } from './component/orders/orders.component';
import { PreviewProductComponent } from './component/preview-product/preview-product.component';
import { PreviewStorefrontComponent } from './component/preview-storefront/preview-storefront.component';
import { PublicBrandPhotosComponent } from './component/public-brand-photos/public-brand-photos.component';
import { PublicBrandVideoComponent } from './component/public-brand-video/public-brand-video.component';
import { PublicFaqsComponent } from './component/public-faqs/public-faqs.component';
import { PublicFoundersComponent } from './component/public-founders/public-founders.component';
import { PublicPeopleComponent } from './component/public-people/public-people.component';
import { PublicStoryComponent } from './component/public-story/public-story.component';
import { SignupFifthComponent } from './component/signup-fifth/signup-fifth.component';
import { SignupFirstComponent } from './component/signup-first/signup-first.component';
import { SignupFourthComponent } from './component/signup-fourth/signup-fourth.component';
import { SignupSecondComponent } from './component/signup-second/signup-second.component';
import { SignupThreeComponent } from './component/signup-three/signup-three.component';
import { Step10Component } from './component/step10/step10.component';
import { Step2Component } from './component/step2/step2.component';
import { Step3Component } from './component/step3/step3.component';
import { Step4Component } from './component/step4/step4.component';
import { Step5Component } from './component/step5/step5.component';
import { Step6Component } from './component/step6/step6.component';
import { Step7Component } from './component/step7/step7.component';
import { Step8Component } from './component/step8/step8.component';
import { Step9Component } from './component/step9/step9.component';
import { StorefrontComponent } from './component/storefront/storefront.component';
import { VendorDescriptionComponent } from './component/vendor-description/vendor-description.component';
import { BrandsComponent } from './component/brands/brands.component';
import { VendorHomeComponent } from './component/vendor-home/vendor-home.component';
import { PagenotfoundComponent } from './component/errors/pagenotfound/pagenotfound.component';
import { SignupSixthComponent } from './component/signup-sixth/signup-sixth.component';
import { EmailVerificationComponent } from './component/email/email-verification/email-verification.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './component/changepassword/changepassword.component';
import { SupportComponent } from './component/support/support.component';
import { LeaderboardBrandsComponent } from './component/leaderboard-brands/leaderboard-brands.component';
import { DiscoverBrandsComponent } from './component/discover-brands/discover-brands.component';
import { LevelOneComponent } from './component/level-one/level-one.component';
import { LevelTwoComponent } from './component/level-two/level-two.component';
import { LevelThreeComponent } from './component/level-three/level-three.component';
import { AddDiscountProductComponent } from './component/add-discount-product/add-discount-product.component';
import { AddDiscountProductImageUploadComponent } from './component/add-discount-product-image-upload/add-discount-product-image-upload.component';
import { EditDiscountProductComponent } from './component/edit-discount-product/edit-discount-product.component';
import { PreviewDiscountComponent } from './component/preview-discount/preview-discount.component';
import { AllBrandsComponent } from './component/all-brands/all-brands.component';
import { DiscountListComponent } from './component/discount-list/discount-list.component';
import { DiscountListDetailsComponent } from './component/discount-list-details/discount-list-details.component';
import { DiscountListDetailsLevelTwoComponent } from './component/discount-list-details-level-two/discount-list-details-level-two.component';
import { DiscountListDetailsLevelThreeComponent } from './component/discount-list-details-level-three/discount-list-details-level-three.component';
import { ShippingCostComponent } from './component/shipping-cost/shipping-cost.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { SignupSeventhComponent } from './component/signup-seventh/signup-seventh.component';

const routes: Routes = [
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   component: PagenotfoundComponent
  // },
  {
    path: '', component: HomePageComponent
  },
  // {
  //   path: '', redirectTo: 'partners', pathMatch: 'full',
  // },
  {
    path: 'partners', component: VendorHomeComponent, data: {state:  'home'}, canActivate: [LoginOrNotGuard]
  },
  {
    path: 'discover/brands/leaderboards/:name', component: BrandsComponent, data: {state:  'brands'}, canActivate: [LoginOrNotGuard]
  },
  // {
  //   path: '', component: LoginComponent
  // },
  {
    path: 'create-vendor-account', component: CreateVendorComponent, canActivate: [LoginOrNotGuard]
  },
  {
    path: 'vendor/email/verification/:token', component: EmailVerificationComponent
  },
  {
    path: 'login', component: LoginComponent, canActivate: [LoginOrNotGuard]
  },
  {
    path: 'vendor-signup-create-leaderboard', component: Step2Component, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'vendor-signup-photos', component: Step3Component, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'vendor-signup-photos/:storefront', component: Step3Component, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'vendor-signup-brand-photos', component: Step4Component, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'vendor-signup-brand-photos/:storefront', component: Step4Component, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'vendor-signup-founders', component: Step5Component, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'vendor-signup-founders/:storefront', component: Step5Component, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'vendor-signup-people', component: Step6Component, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'vendor-signup-people/:storefront', component: Step6Component, canActivate: [AuthGuard]
  },
  {
    path: 'vendor-signup-story', component: Step7Component, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'vendor-signup-story/:storefront', component: Step7Component, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'vendor-signup-video', component: Step8Component, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'vendor-signup-video/:storefront', component: Step8Component, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'vendor-signup-links', component: Step9Component, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'vendor-signup-links/:storefront', component: Step9Component, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'vendor-signup-faqs', component: Step10Component, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'vendor-signup-faqs/:storefront', component: Step10Component, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'vendor-connect-stripe', component: ConnectStripeComponent, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'create-product', component: CreateproductComponent, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'create-product-image-upload/:id', component: CreateProductImageComponent, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'create-product-shipping-cost/:id', component: ShippingCostComponent, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'create-product-attributes/:id', component: CreateProductAttributesComponent, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'create-product-variations/:id', component: CreateProductVariationsComponent, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'preview-product/:id', component: PreviewProductComponent
  },
  {
    path: 'vendor-storefront', component: StorefrontComponent, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'create-leaderboard', component: CreateleaderboardComponent, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'edit-product/:pid', component: EditProductComponent, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'vendor-leaderboards', component: LeaderboardsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'vendor-orders', component: OrdersComponent, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'vendor/edit/description', component: VendorDescriptionComponent, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'vendor/public/founders', component: PublicFoundersComponent,
  },
  {
    path: 'vendor/public/people', component: PublicPeopleComponent,
  },
  {
    path: 'vendor/public/story', component: PublicStoryComponent,
  },
  {
    path: 'vendor/public/faqs', component: PublicFaqsComponent,
  },
  {
    path: 'vendor/public/brand/video', component: PublicBrandVideoComponent,
  },
  {
    path: 'vendor/public/brand/photos', component: PublicBrandPhotosComponent,
  },
  {
    path: 'vendor/preview/storefront', component: PreviewStorefrontComponent
  },
  {
    path: 'storefront/:compname', component: PreviewStorefrontComponent
  },
  {
    path: 'vendor/signup/first', component: SignupFirstComponent, canActivate: [LoginOrNotGuard]
  },
  {
    path: 'vendor/signup/second', component: SignupSecondComponent, canActivate: [LoginOrNotGuard]
  },
  {
    path: 'vendor/signup/three', component: SignupThreeComponent, canActivate: [LoginOrNotGuard]
  },
  {
    path: 'vendor/signup/fourth', component: SignupFourthComponent, canActivate: [LoginOrNotGuard]
  },
  {
    path: 'vendor/signup/fifth', component: SignupFifthComponent, canActivate: [LoginOrNotGuard]
  },
  {
    path: 'vendor/signup/sixth', component: SignupSixthComponent, canActivate: [LoginOrNotGuard]
  },
  {
    path: 'vendor/signup/seventh', component: SignupSeventhComponent, canActivate: [LoginOrNotGuard]
  },
  {
    path: 'vendor/forgot/password', component: ForgotpasswordComponent, canActivate: [LoginOrNotGuard]
  },
  {
    path: 'vendor/forgot/password/done/:token', component: ChangepasswordComponent
  },
  {
    path: 'support', component: SupportComponent
  },
  {
    path: 'leaderboard/brands/list/:slug/:min/:max', component: LeaderboardBrandsComponent
  },
  {
    path: 'discover/brands', component: DiscoverBrandsComponent
  },
  {
    path: 'discover/brands/level/one/:id/:status', component: LevelOneComponent
  },
  {
    path: 'discover/brands/level/two/:id', component: LevelTwoComponent
  },
  {
    path: 'discover/brands/level/three/:id', component: LevelThreeComponent
  },
  {
    path: 'product/discount/add', component: AddDiscountProductComponent, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'upload/images/:id', component: AddDiscountProductImageUploadComponent, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'edit/discount/:id', component: EditDiscountProductComponent, canActivate: [AuthGuard, LoginOrNotGuard]
  },
  {
    path: 'preview/discount/:id', component: PreviewDiscountComponent
  },
  {
    path: 'all/brands', component: AllBrandsComponent
  },
  {
    path: 'view/leaderboards/:slug', component: LeaderboardsComponent
  },
  {
    path: 'discount/list', component: DiscountListComponent
  },
  {
    path: 'discount/list/details/:id/:min/:max', component: DiscountListDetailsComponent
  },
  // {
  //   path: 'discount/list/details/:id', component: DiscountListDetailsComponent
  // },
  {
    path: 'discount/list/details/level/two/:id/:oneid/:min/:max', component: DiscountListDetailsLevelTwoComponent
  },
  {
    path: 'discount/list/details/level/three/:id/:twoid/:min/:max', component: DiscountListDetailsLevelThreeComponent
  },

  //lazy loading for buyer

  {
    path: 'u', loadChildren:() => import('./buyer/buyer.module').then(mod=>mod.BuyerModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false, scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
