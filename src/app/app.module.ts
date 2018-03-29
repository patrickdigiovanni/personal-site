import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeadingComponent } from './leading/leading.component';
import { ArticleComponent } from './article/article.component';

import {FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faBars);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeadingComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
