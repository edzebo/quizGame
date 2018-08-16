import { AuthGuard } from './auth.guard';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuestionService } from './question.service';
import { MaterialModule } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { Question } from './question';
import { FinalComponent } from './final/final.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { RouterModule, Routes } from '@angular/router';
import { WrongAnswerComponent } from './wrong-answer/wrong-answer.component';
import { EditComponent } from './edit/edit.component';
import { MatFormFieldModule, MatFormField, MatInputModule, MatMenuModule } from '../../node_modules/@angular/material';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'quiz', component: FirstPageComponent, canActivate: [AuthGuard] },
  { path: 'inprogress', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'edit', component: EditComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FinalComponent,
    FirstPageComponent,
    WrongAnswerComponent,
    EditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [QuestionService, Question],
  bootstrap: [AppComponent],
  entryComponents: [WrongAnswerComponent, FinalComponent]
})
export class AppModule { }
