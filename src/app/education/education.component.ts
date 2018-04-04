import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education =  [
    {
      "institution": "SUNY Empire State College",
      "area": "Computer Science (BS)",
      "studyType": "",
      "startDate": "2014",
      "gpa": "",
      "courses": [],
      "endDate": "2018"
    },
    {
      "institution": "Monroe Community College",
      "area": "Music",
      "studyType": "",
      "startDate": "2004",
      "gpa": "",
      "courses": [],
      "endDate": "2005"
    },
    {
      "institution": "Community College of Vermont",
      "area": "Arts / Psychology",
      "studyType": "",
      "startDate": "1997",
      "gpa": "",
      "courses": [],
      "endDate": "1999"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
