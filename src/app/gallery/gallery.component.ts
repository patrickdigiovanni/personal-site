import { Component, OnInit, Input } from '@angular/core';
import perfundo from 'perfundo'
import * as  _ from "lodash";
import { NgxGalleryImage, NgxGalleryOptions, NgxGalleryImageSize } from 'ngx-gallery';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})



export class GalleryComponent implements OnInit {
 
  @Input('qty') qty : number;

  galleryImages: NgxGalleryImage[];
  galleryOptions: NgxGalleryOptions[];

  @Input('gallery-folder') galleryFolder : string;
  @Input('gallery-name') galleryName: string;
  description : string;
  galleryPath : string = "../../assets/img/"+ this.galleryFolder ;
  descriptionPath:string = this.galleryPath + "/description.txt";
 

 
  constructor() {
    
    
  

  }

  ngOnInit() {
    
    
    let numImages = _.range(1, (this.qty + 1));
    let tempArray = [];
    for (let i of numImages) {
      let bigUrl = "../../assets/img/"+ this.galleryFolder + "/full/" + i + ".jpg";
      let thumbUrl = "../../assets/img/"+ this.galleryFolder + "/thumbs/" + i + ".jpg";

     


      tempArray.push({

        small: thumbUrl,
        medium: bigUrl,
        big: bigUrl


      });
    }
    this.galleryImages = tempArray;
    this.galleryOptions = [
      {
        width: '100%',
        height: '500px',
        thumbnailsColumns: 5,
        imageSize: NgxGalleryImageSize.Contain,
        thumbnailSize: NgxGalleryImageSize.Contain,
        imageSwipe: true,
        thumbnailsSwipe: true,
        previewKeyboardNavigation : true
      }
    ];



  }
}