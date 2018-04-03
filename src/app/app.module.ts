import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { NgxGalleryModule } from "ngx-gallery";
import { AppRoutingModule } from './app-routing.module';
import { CollapsibleModule } from "ngx-collapsible";


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeadingComponent } from './leading/leading.component';
import { ArticleComponent } from './article/article.component';

import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotosComponent } from './photos/photos.component';
import { ParticlesComponent } from './particles/particles.component';
import { ProceduralComponent } from './procedural/procedural.component';
import { RandomEyesComponent } from './random-eyes/random-eyes.component';
import { ArtComponent } from './art/art.component';
import { OpOutputComponent } from './op-output/op-output.component';
import { DesignComponent } from './design/design.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeadingComponent,
    ArticleComponent,
    NavbarComponent,
    GalleryComponent,
    PhotosComponent,
    ParticlesComponent,
    ProceduralComponent,
    RandomEyesComponent,
    ArtComponent,
    OpOutputComponent,
    DesignComponent,
    SkillsComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGalleryModule,
    HttpClientModule,
    CollapsibleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
