import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { Strength } from "../models/strength";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations'

@Component({
  selector: 'app-leading',
  templateUrl: './leading.component.html',
  providers: [AngularFirestore],
  styleUrls: ['./leading.component.scss'],
  animations: [
    trigger('flyInLeft', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(200%)'}),
        animate(2000)
      ]),
      transition('* => void', [
        animate(1000, style({transform: 'translateX(200%)'}))
      ])]),
      trigger('flyInRight', [ state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-200%)'}),
        animate(2000)
      ]),
      transition('* => void', [
        animate(1000, style({transform: 'translateX(-200%)'}))
      ])
    ])
  ]
  
})
export class LeadingComponent implements OnInit {
  state : string = 'in';
  
  strengthsCollection: AngularFirestoreCollection<Strength>;
  strengths: Observable<Strength[]>;
  numStrengths : number ;

  constructor(private afs: AngularFirestore) {
   
  }

  ngOnInit() {
    this.strengthsCollection = this.afs.collection('strengths');
    this.strengths = this.strengthsCollection.valueChanges();
    
  }
  toggleState(){
    this.state  = (this.state === 'in' ?  'out': 'in');
   
  }
}
