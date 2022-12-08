import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

 const appRoutes: Routes = [
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
  {
    path: 'user-profile/:id', component: UserComponent
  }
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
    UserComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes),
    // HttpClientModule
  ],
  // exports: [
  //   RouterModule,
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
