import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { Strength } from "../models/strength";
@Component({
  selector: 'app-leading',
  templateUrl: './leading.component.html',
  providers: [AngularFirestore],
  styleUrls: ['./leading.component.scss']
})
export class LeadingComponent implements OnInit {
  completed: boolean = false;
  strengthsCollection: AngularFirestoreCollection<Strength>;
  strengths: Observable<Strength[]>;

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.strengthsCollection = this.afs.collection('strengths');
    this.strengths = this.strengthsCollection.valueChanges();
    
  }
  
}
