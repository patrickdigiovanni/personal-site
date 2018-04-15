import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotosComponent } from './photos/photos.component';
import { ParticlesComponent } from './particles/particles.component';
import { ProceduralComponent } from './procedural/procedural.component';
import { RandomEyesComponent } from './random-eyes/random-eyes.component';
import { ArtComponent } from './art/art.component';
import { OpOutputComponent } from './op-output/op-output.component';
import { DesignComponent } from './design/design.component';
import { ResumeComponent } from "./resume/resume.component";
import { EducationComponent } from "./education/education.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";
import { CodeComponent } from "./code/code.component";
import { HomeComponent } from "./home/home.component";
const routes: Routes = [
  { path : '',
  component: HomeComponent
},{path: 'photos',
component: PhotosComponent},
{ path: 'particles',
component: ParticlesComponent},
{ path : 'procedural',
component: ProceduralComponent},
{ path : 'random-eyes',
component: RandomEyesComponent},
{path : 'menu',
component: ArtComponent},
{path : 'oscillation-painter',
component: OpOutputComponent},
{path : 'design',
component: DesignComponent},
{path: 'education',
component: EducationComponent },
{path :'experience',
component : ResumeComponent},
{path :'skills',
component : SkillsComponent},
{path: 'contact',
component: ContactComponent},
{path: 'code',
component: CodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
