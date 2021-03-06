import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  pages = [
    {
      "title": "RandomEyes",
      "category": "art",
      "description": "",
      "image": "../../assets/img/random-eyes/thumbs/1.jpg"
  
    },
    {
      "title": "3D Particle Systems",
      "category": "3d",
      "description": "",
      "image": "../../assets/img/particle-systems/thumbs/6.jpg"
  
    },
    {
      "title": "Photography",
      "category": "photography",
      "description": "",
      "image": "../../assets/img/photos/thumbs/6.jpg"
  
    },
    {
      "title": "Design",
      "category": "Design",
      "description": "",
      "image": "../../assets/img/design/thumbs/6.jpg"
  
    },
    {
      "title": "Procedural Forms",
      "category": "3D",
      "description": "",
      "image": "../../assets/img/procedural-forms/thumbs/6.jpg"
  
    },
    {
      "title": "Oscillation Painter",
      "category": "Code",
      "description": "",
      "image": "../../assets/img/osc-painter/thumbs/5.jpg"
  
    }
    
  ];
  constructor() { 
    
  
  }

  ngOnInit() {
  }

}
