import { FlexLayoutModule } from '@angular/flex-layout';
import { QuestionService } from './question.service';
import { MaterialModule } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { Question } from './question';
import { ResultsComponent } from './results/results.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule,
    FlexLayoutModule  
  ],
  providers: [QuestionService, Question],
  bootstrap: [AppComponent]
})
export class AppModule { }
