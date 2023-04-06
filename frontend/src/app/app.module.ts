import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from './page/page.module';
//import { WelcomeComponent } from './page/welcome/welcome.component';
//import { QuestionComponent } from './page/question/question.component';
import {HttpClientModule} from '@angular/common/http'
import { ChangeBgDirective } from './change-bg.directive';

export function jwtTokenGetter(): string
{
  return localStorage.getItem('id_token') || "";
}
@NgModule({
  declarations: [
    AppComponent,
    ChangeBgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule, 
    HttpClientModule    //*****************************//
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
