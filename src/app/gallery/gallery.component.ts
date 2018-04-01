import { Component, OnInit } from '@angular/core';
import perfundo from 'perfundo'
import * as  _ from "lodash";
import { NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

 

export class GalleryComponent implements OnInit {
  numImages = _.range(1, 10);
  galleryImages : NgxGalleryImage[];
  galleryOptions : NgxGalleryOptions[];
  

  constructor() {
    let tempArray= [];
    for (let i of this.numImages) {
      let bigUrl = "../../assets/img/osc-painter/full/" + i + ".jpg";
      let thumbUrl = "../../assets/img/osc-painter/thumbs/" + i + ".jpg";
      
    
    
      
      tempArray.push({
       
       small : thumbUrl,
       medium : bigUrl,
       big : bigUrl
      
        
      });
    }
    this.galleryImages = tempArray;
    
  }

  ngOnInit() {
    console.log(this.galleryImages);

    this.galleryOptions = [
      {
        width: '400px',
        height: '400px',
        thumbnailsColumns: 4
      }
    ];

   
   
  }
}