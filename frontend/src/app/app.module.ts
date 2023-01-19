import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from '@angular/material/button';
import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {EventListComponent} from './components/event-list/event-list.component';
import {HeaderComponent} from './components/header/header.component';
import {AnimalListComponent} from './components/animal-list/animal-list.component';
import {LoginComponent} from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './components/register/register.component';
import { AddAnimalFormComponent } from './components/add-animal-form/add-animal-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AnimalPageComponent } from './components/animal-page/animal-page.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuizResultsComponent} from "./components/quiz-results/quiz-results.component";
import { SurveyComponent } from './components/survey/survey.component';
import { MatSelectModule } from '@angular/material';
import { DonationsComponent } from './components/donations/donations.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'users',
    children: [
      {
        path: 'edit', component: EditUserComponent
      },
      {
        path: 'profile', component: UserComponent
      }
    ]
  },
  {
    path: 'events', component: EventListComponent
  },
  {
    path: 'wishlist', component: WishlistComponent
  },
  {
    path: 'quiz', component: QuizComponent
  },
  {
    path : 'donations',component: DonationsComponent
  },
  {
    path : 'survey',component: SurveyComponent
  },
  {
    path : 'quizResult', component : QuizResultsComponent
  },
  {
    path: 'animals',
    children: [
      {
        path: 'add', component: AddAnimalFormComponent
      },
      {
        path: ':type', component: AnimalListComponent
      },
      {
        path: 'get/:id', component: AnimalPageComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EventListComponent,
    HeaderComponent,
    AnimalListComponent,
    LoginComponent,
    RegisterComponent,
    AddAnimalFormComponent,
    EditUserComponent,
    AnimalPageComponent,
    WishlistComponent,
    QuizComponent,
    FooterComponent,
    QuizResultsComponent,
    SurveyComponent,
    DonationsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
