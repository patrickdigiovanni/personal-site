import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './topnav.component.scss']
})
export class TopnavComponent implements OnInit {
 show : boolean = false;
 toggleCollapse(){
   this.show = !this.show
 }
  constructor() { }

  ngOnInit() {
  }

}
