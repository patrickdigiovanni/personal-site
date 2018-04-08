import { Component } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ AngularFireStorage]
})
export class AppComponent {
  title = 'app';

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  constructor(private router : Router, private titleService : Title, private afStorage: AngularFireStorage){

  }
upload(event){
  const id = Math.random().toString(36).substring(2);
  this.ref = this.afStorage.ref(id);
  this.task = this.ref.put(event.target.files[0]);
}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.router.events.subscribe((event)=>
{
  if(event instanceof NavigationEnd){
    
    this.titleService.setTitle("Patrick DiGiovanni - " + event.url.substring(1,2).toUpperCase() + event.url.substring(2));
  }
})  
}
}