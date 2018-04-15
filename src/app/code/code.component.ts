import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Sketch } from "../models/sketch";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  providers : [AngularFirestore]
})
export class CodeComponent implements OnInit {
  sketchCollection : AngularFirestoreCollection<Sketch>
  sketches : Observable<Sketch[]>
  constructor( private afs : AngularFirestore) { }
 
  
  ngOnInit() {
      this.sketchCollection =  this.afs.collection('sketches');
      this.sketches = this.sketchCollection.valueChanges();
      
  }
  ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    
  }
}
