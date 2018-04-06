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
const routes: Routes = [
  { path: 'photos',
component: PhotosComponent},
{ path: 'particles',
component: ParticlesComponent},
{ path : 'procedural',
component: ProceduralComponent},
{ path : 'random-eyes',
component: RandomEyesComponent},
{path : 'art',
component: ArtComponent},
{path : 'osc-paint-output',
component: OpOutputComponent},
{path : 'design',
component: DesignComponent},
{path: 'education',
component: EducationComponent },
{path :'experience',
component : ResumeComponent},
{path :'skills',
component : SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
