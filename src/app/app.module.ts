import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { AdoptionpageComponent } from './components/adoptionpage/adoptionpage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BluDetailsComponent } from './components/animal-details/blu-details/blu-details.component';
import { BobDetailsComponent } from './components/animal-details/bob-details/bob-details.component';
import { BogdiDetailsComponent } from './components/animal-details/bogdi-details/bogdi-details.component';
import { GheorgheDetailsComponent } from './components/animal-details/gheorghe-details/gheorghe-details.component';
import { JackDetailsComponent } from './components/animal-details/jack-details/jack-details.component';
import { KimiDetailsComponent } from './components/animal-details/kimi-details/kimi-details.component';
import { LaylaDetailsComponent } from './components/animal-details/layla-details/layla-details.component';
import { LuisDetailsComponent } from './components/animal-details/luis-details/luis-details.component';
import { LuluDetailsComponent } from './components/animal-details/lulu-details/lulu-details.component';
import { RockyDetailsComponent } from './components/animal-details/rocky-details/rocky-details.component';
import { ToniDetailsComponent } from './components/animal-details/toni-details/toni-details.component';
import { RocoDetailsComponent } from './components/animal-details/roco-details/roco-details.component';

 const appRoutes: Routes = [
  {
    path:'',
    component: AdoptionpageComponent
  },
  {
    path: 'roco-details',
    component: RocoDetailsComponent
  },
  {
    path: 'blu-details',
    component: BluDetailsComponent
  },
  {
    path: 'bob-details',
    component: BobDetailsComponent
  },
  {
    path: 'bogdi-details',
    component: BogdiDetailsComponent
  },
  {
    path: 'gheorghe-details',
    component: GheorgheDetailsComponent
  },
  {
    path: 'jack-details',
    component: JackDetailsComponent
  },
  {
    path: 'kimi-details',
    component: KimiDetailsComponent
  },
  {
    path: 'layla-details',
    component: LaylaDetailsComponent
  },
  {
    path: 'luis-details',
    component: LuisDetailsComponent
  },
  {
    path: 'lulu-details',
    component: LuluDetailsComponent
  },
  {
    path: 'rocky-details',
    component: RockyDetailsComponent
  },
  {
    path: 'toni-details',
    component: ToniDetailsComponent
  },

  
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
    RocoDetailsComponent,
    BluDetailsComponent,
    BobDetailsComponent,
    BogdiDetailsComponent,
    GheorgheDetailsComponent,
    JackDetailsComponent,
    KimiDetailsComponent,
    LaylaDetailsComponent,
    LuisDetailsComponent,
    LuluDetailsComponent,
    RockyDetailsComponent,
    ToniDetailsComponent
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
