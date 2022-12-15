import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';

import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {EventListComponent} from './components/event-list/event-list.component';
import {HeaderComponent} from './components/header/header.component';
import {AnimalListComponent} from './components/animal-list/animal-list.component';

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
//     path: '/',
//     component: HomePageComponent
//   },
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
    AnimalListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
