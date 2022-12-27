import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
// import {MatButtonModule} from '@angular/material/button';

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {EventListComponent} from './components/event-list/event-list.component';
import {HeaderComponent} from './components/header/header.component';
import {AnimalListComponent} from './components/animal-list/animal-list.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SignupComponent } from './components/signup/signup.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'signup',
    component: SignupComponent,
  },
//   // {
//   //   path: 'register',
//   //   component: RegisterComponent
//   // },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'users/:id', component: UserComponent
  },
  {
    path: 'events', component: EventListComponent
  },
  {
    path: 'animals/:type', component: AnimalListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EventListComponent,
    HeaderComponent,
    AnimalListComponent,
    HomePageComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // MatButtonModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
