import { FlexLayoutModule } from '@angular/flex-layout';
import { QuestionService } from './question.service';
import { MaterialModule } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { Question } from './question';
import { FinalComponent } from './final/final.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { RouterModule, Routes } from '@angular/router';
import { WrongAnswerComponent } from './wrong-answer/wrong-answer.component';


const appRoutes: Routes = [
  {path: 'quiz', component: FirstPageComponent},
  {path: 'inprogress', component: MainComponent},
  {path: '', redirectTo: '/quiz', pathMatch: 'full'}
];




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FinalComponent,
    FirstPageComponent,
    WrongAnswerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [QuestionService, Question],
  bootstrap: [AppComponent],
  entryComponents: [WrongAnswerComponent, FinalComponent]
})
export class AppModule { }
