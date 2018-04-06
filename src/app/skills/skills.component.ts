import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsList = [      
    {
      "skillset": "Programming",
      "skills": [
        "HTML5",
        "CSS",
        "PHP",
        "SQL",
        "JavaScript",
        "Java",
        "Android",
        "Python",
        "C",
        "C#",
        "Visual Basic",
        "R",
        "Ruby",
        "Processing",
        "Arduino"
      ]
    },
    {
      "skillset": "Software",
      "skills": [
        "MS Office",
        "LibreOffice",
        "Google Docs",
        "MS Project",
        "Adobe Creative Suite",
        "GIMP",
        "Inkscape",
        "Cinema4D",
        "Blender",
        "Adobe Premiere",
        "Final Cut"
      ]
    },
    {
      "skillset": "Hardware",
      "skills": [
        "Installation",
        "Photography",
        "Video recording / editing",
        "Audio recording / engineering",
        "Live audio mixing",
        "Scanning",
        "Printing (most formats)",
        "Photocopying",
        "Microcontroller-based systems",
        "RGB LED array programming",
        "Android customization",
        "3D Printing",
        "Laser Cutting / Engraving",
        "Vinyl Cutting"
      ]
    },
    {
      "skillset": "Technical Knowledge",
      "skills": [
        "Systems Architecture",
        "Software Engineering",
        "Web Design",
        "Operating Systems",
        "Ethics and History of Technology",
        "Project Management"
      ]
    }]

  constructor() { }

  ngOnInit() {
  }

}
