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
import { ResultsComponent } from './results/results.component';
import { FinalComponent } from './final/final.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {path: 'quiz', component: FirstPageComponent},
  {path: 'inprogress', component: MainComponent},
  {path: '', redirectTo:'/quiz', pathMatch: 'full'}
]




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ResultsComponent,
    FinalComponent,
    FirstPageComponent,
    
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
  entryComponents: [ResultsComponent, FinalComponent]
})
export class AppModule { }
