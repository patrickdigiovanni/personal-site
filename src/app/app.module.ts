import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxGalleryModule } from "ngx-gallery";
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeadingComponent } from './leading/leading.component';
import { ArticleComponent } from './article/article.component';

import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeadingComponent,
    ArticleComponent,
    NavbarComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGalleryModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
