import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { QuizComponent } from './quiz/quiz.component';

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
    path: '', component: UserComponent
  },
  {
    path: 'users/:id', component: UserComponent
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
    UserComponent,
    QuizComponent
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
