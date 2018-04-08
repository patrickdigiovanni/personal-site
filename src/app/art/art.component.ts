import { Component, OnInit } from '@angular/core';
import { LeadingComponent } from "../leading/leading.component";
@Component({
  selector: 'app-art',
 
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {
  public pages = {
    'resume' :[
      {
        "title": "Skills",
        "category": "Skills",
        "description": "",
        "image": "../../assets/img/skills-preview.jpg",
        "route": "/skills"
  
      },
      {
        "title": "Education",
        "category": "Education",
        "description": "",
        "image": "../../assets/img/education-preview.jpg",
        "route": "/education"
  
      },
      {
        "title": "Experience",
        "category": "Skills",
        "description": "",
        "image": "../../assets/img/experience-preview.jpg",
        "route": "/experience"
  
      }
    ]
    ,
    '2d': [
    {
      "title": "Photography",
      "category": "photography",
      "description": "",
      "image": "../../assets/img/photos/thumbs/6.jpg",
      "route": "/photos"

    },

    {
      "title": "Oscillation Painter",
      "category": "Code",
      "description": "",
      "image": "../../assets/img/osc-painter/thumbs/5.jpg",
      "route": "/osc-paint-output"

    },


    {
      "title": "RandomEyes",
      "category": "art",
      "description": "",
      "image": "../../assets/img/random-eyes/thumbs/5.jpg",
      "route": "/random-eyes"
    },
    {
      "title": "Design",
      "category": "Design",
      "description": "",
      "image": "../../assets/img/design/thumbs/4.jpg",
      "route": "/design"

    }],
    '3d': [
      {
        "title": "Procedural Forms",
        "category": "3D",
        "description": "",
        "image": "../../assets/img/procedural-forms/thumbs/3.jpg",
        "route": "/procedural"

      },
      {
        "title": "3D Particle Systems",
        "category": "3d",
        "description": "",
        "image": "../../assets/img/particle-systems/thumbs/3.jpg",
        "route": "/particles"

      }]
  }



  constructor() { }

  ngOnInit() {
  }

}
