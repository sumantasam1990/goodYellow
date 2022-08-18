import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateVendorComponent } from './component/create-vendor/create-vendor.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from './component/login/login.component';
import { Step2Component } from './component/step2/step2.component';
import { Step3Component } from './component/step3/step3.component';
import { Step4Component } from './component/step4/step4.component';
import { Step5Component } from './component/step5/step5.component';
import { Step6Component } from './component/step6/step6.component';
import { Step7Component } from './component/step7/step7.component';
import { Step8Component } from './component/step8/step8.component';
import { Step9Component } from './component/step9/step9.component';
import { Step10Component } from './component/step10/step10.component';
import { ConnectStripeComponent } from './component/connect-stripe/connect-stripe.component';
import { CreateproductComponent } from './component/createproduct/createproduct.component';
import { CreateProductImageComponent } from './component/create-product-image/create-product-image.component';
import { CreateProductAttributesComponent } from './component/create-product-attributes/create-product-attributes.component';
import { CreateProductVariationsComponent } from './component/create-product-variations/create-product-variations.component';
import { PreviewProductComponent } from './component/preview-product/preview-product.component';
import { StorefrontComponent } from './component/storefront/storefront.component';
import { CreateleaderboardComponent } from './component/createleaderboard/createleaderboard.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { LeaderboardsComponent } from './component/leaderboards/leaderboards.component';
import { OrdersComponent } from './component/orders/orders.component';
import { VendorDescriptionComponent } from './component/vendor-description/vendor-description.component';
import { PublicFoundersComponent } from './component/public-founders/public-founders.component';
import { PublicPeopleComponent } from './component/public-people/public-people.component';
import { PublicStoryComponent } from './component/public-story/public-story.component';
import { PublicFaqsComponent } from './component/public-faqs/public-faqs.component';
import { PublicBrandVideoComponent } from './component/public-brand-video/public-brand-video.component';
import { PublicBrandPhotosComponent } from './component/public-brand-photos/public-brand-photos.component';
import { PreviewStorefrontComponent } from './component/preview-storefront/preview-storefront.component';
import { SignupFirstComponent } from './component/signup-first/signup-first.component';
import { SignupSecondComponent } from './component/signup-second/signup-second.component';
import { SignupThreeComponent } from './component/signup-three/signup-three.component';
import { SignupFourthComponent } from './component/signup-fourth/signup-fourth.component';
import { SignupFifthComponent } from './component/signup-fifth/signup-fifth.component';
import { BrandsComponent } from './component/brands/brands.component';
import { VendorHomeComponent } from './component/vendor-home/vendor-home.component';
import { PagenotfoundComponent } from './component/errors/pagenotfound/pagenotfound.component';
import { SignupSixthComponent } from './component/signup-sixth/signup-sixth.component';
import { EmailVerificationComponent } from './component/email/email-verification/email-verification.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './component/changepassword/changepassword.component';
import { SupportComponent } from './component/support/support.component';
import { LeaderboardBrandsComponent } from './component/leaderboard-brands/leaderboard-brands.component';
import { CausesComponent } from './component/inhouse/causes/causes.component';
import { PlanetComponent } from './component/inhouse/planet/planet.component';
import { PeopleComponent } from './component/inhouse/people/people.component';
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



@NgModule({
  declarations: [
    AppComponent,
    CreateVendorComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    Step7Component,
    Step8Component,
    Step9Component,
    Step10Component,
    ConnectStripeComponent,
    CreateproductComponent,
    CreateProductImageComponent,
    CreateProductAttributesComponent,
    CreateProductVariationsComponent,
    PreviewProductComponent,
    StorefrontComponent,
    CreateleaderboardComponent,
    EditProductComponent,
    LeaderboardsComponent,
    OrdersComponent,
    VendorDescriptionComponent,
    PublicFoundersComponent,
    PublicPeopleComponent,
    PublicStoryComponent,
    PublicFaqsComponent,
    PublicBrandVideoComponent,
    PublicBrandPhotosComponent,
    PreviewStorefrontComponent,
    SignupFirstComponent,
    SignupSecondComponent,
    SignupThreeComponent,
    SignupFourthComponent,
    SignupFifthComponent,
    BrandsComponent,
    VendorHomeComponent,
    PagenotfoundComponent,
    SignupSixthComponent,
    EmailVerificationComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    SupportComponent,
    LeaderboardBrandsComponent,
    CausesComponent,
    PlanetComponent,
    PeopleComponent,
    DiscoverBrandsComponent,
    LevelOneComponent,
    LevelTwoComponent,
    LevelThreeComponent,
    AddDiscountProductComponent,
    AddDiscountProductImageUploadComponent,
    EditDiscountProductComponent,
    PreviewDiscountComponent,
    AllBrandsComponent,
    DiscountListComponent,
    DiscountListDetailsComponent,
    DiscountListDetailsLevelTwoComponent,
    DiscountListDetailsLevelThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot(),



  ],schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
