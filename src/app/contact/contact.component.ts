import { Component, AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from "angularfire2/firestore";
import { ContactSubmission } from '../models/contact-submission';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers : [AngularFirestore]
})
export class ContactComponent  {
form: FormGroup;

  
  constructor(private fb: FormBuilder, private af : AngularFirestore) {
    this.createForm();
  }
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    const {name, email, message} = this.form.value;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;

    let formRequest = { name, email, message, date, html };

    this.af.collection('/messages').add(formRequest);
    this.form.reset();
  }
}
  
