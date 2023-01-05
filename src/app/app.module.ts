import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { AdoptionpageComponent } from './components/adoptionpage-cart/adoptionpage-cart.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdoptionpageListComponent } from './components/adoptionpage-cart/adoptionpage-list/adoptionpage-list.component';
import { CartComponent } from './components/adoptionpage-cart/cart/cart.component';
import { CartItemComponent } from './components/adoptionpage-cart/cart/cart-item/cart-item.component';
import { AdoptionpageItemComponent } from './components/adoptionpage-cart/adoptionpage-list/adoptionpage-item/adoptionpage-item.component';

 const appRoutes: Routes = [
  {
    path:'',
    component: AdoptionpageComponent
  }


//   // {
//   //   path: 'login',
//   //   component: LoginPageComponent,
//   // },
//   // {
//   //   path: 'register',
//   //   component: RegisterComponent
//   // },
//   {
//     path: '/home',
//     component: HomePageComponent
//   },
  // {
  //   path: '', component: UserComponent
  // },
  // {
  //   path: 'users/:id', component: UserComponent
  // }
//   {
//     path: 'animals', component: AnimalsListComponent
//   },
//   {
//     path: 'animals/:id', component: AnimalPageComponent
//   }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    AdoptionpageComponent,
    AdoptionpageListComponent,
    CartComponent,
    CartItemComponent,
    AdoptionpageItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
