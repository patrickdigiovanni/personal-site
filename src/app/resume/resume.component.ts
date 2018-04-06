import { Component, OnInit } from '@angular/core';
import { EducationComponent } from "../education/education.component";
import * as $ from 'jquery/dist/jquery';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  
  styleUrls: ['./resume.component.scss',
  "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class ResumeComponent implements OnInit {
data = [{
  "basics": {
    "name": "Patrick DiGiovanni",
    "label": "Creative Technology Specialist",
    "picture": "",
    "email": "patrickdigiovanni77@gmail.com",
    "phone": "",
    "website": "",
    "summary": "INTELLIGENT - Always willing and able to learn new skills and techniques, as well as new ways of looking at things.  Eagerly takes advantage of any and all available training opportunities that will help improve quality of work. TECHNICALLY PROFICIENT - Strong understanding of coding principles, concepts, and best practice conventions in several programming languages. Highly proficient in the use of most software, and the use and installation of Windows and Linux/UNIX based operating systems.  CREATIVE - Talented in a variety of artistic fields, including photography, video, music, and 2D/3D computer graphics/animation.  Maintains an art page with 950+ organic followers and has produced dozens of electronic music compositions, attracting a very small but devoted fan base. COLLABORATIVE - Works well on a team, promoting cooperation over competition.  Extensively trained and certified in non-violent conflict resolution. Diversified Skill Set - Technical, artistic, insightful, and intuitive.  Native in English, fluent in Spanish.",
    "location": {
      "address": "",
      "postalCode": "United States",
      "city": "",
      "countryCode": "",
      "region": ""
    },
    "profiles": []
  },
  "work": [
   
    
    {
      "company": "Deepfelt Visions",
      "position": "Graphic Artist / Photographer",
      "website": "https://www.facebook.com/deepfeltvisions/",
      "startDate": "2010-01-01",
      "summary": "Designed flyers, logos, and business cards.\nUsed software and hardware tools to manipulate photos into abstract compositions.\nExperimented with 3D modeling and animation using both graphical and code-based interfaces.\nDeveloped Oscillation Painter, a web-based tool for creating unique abstract art and live animations\nCreated and maintained a Facebook page with 950+ organic followers.",
      "highlights": [],
      "endDate" : "Present"
    },
    {
      "company": "Literacy Volunteers of Rochester, Inc.",
      "position": "Digital Literacy Navigator",
      "website": "https://literacyrochester.org/",
      "startDate": "2016-03-01",
      "summary": "Assisted individuals in libraries and other community centers with computer-related tasks.\nCommon scenarios included: creating resumes; submitting online job applications; creating and using email and other online services; using digital media as a tool for research and education.\nWorked to bridge the \“digital divide\” by empowering customers in areas of concentrated poverty, fostering core digital literacy skills.",
      "highlights": [],
      "endDate": "2017-12-01"
    },
    {
      "company": "FedEx Office",
      "position": "Production Coordinator",
      "website": "https://www/fedexoffice.com",
      "startDate": "2006-11-01",
      "summary": "Interacted directly with customers to create, track, and tender orders through computerized POS system, and performed end-of-day closing procedures.\nPlanned and executed all production related tasks, including scanning, printing, folding, punching, collating, and stapling of documents.\nPrepared documents for printing in various formats.\nCalibrated and maintain machines for proper color and quality of output.\nPrinted and finished large-format signs, banners, etc.\nGained hundreds of hours of valuable training in hardware, software and customer service.\nHelped store earn a \"Purple Promise\" award for providing an outstanding customer experience by initiating and coordinating a major order.",
      "highlights": [],
      "endDate": "2010-09-01"
    },
    {
      "company": "Amigos De Los Animales",
      "position": "Shelter Worker",
      "website": "https://www.facebook.com/adlapr/?rc=p",
      "startDate": "2014-01-01",
      "summary": "Assisted in the maintenance and care of a shelter housing 65-100 rescued street dogs.",
      "highlights": [],
      "endDate": "2014-12-01"
    },
    {
      "company": "Mystic Morning Farm",
      "position": "Farm Assistant",
      "website": "https://www.facebook.com/Mystic-Morning-Farm-214829198597652/",
      "startDate": "2010-01-01",
      "summary": "Planted, harvested and watered vegetable crops, and prepared them for sale in local markets.\nStaffed proprietary farm stand and booths at various farmers’ markets.",
      "highlights": [],
      "endDate": "2012-01-01"
    },
    
    {
      "company": "Ahli Baba's Kabob Shop",
      "position": "Grill Cook /  Cashier",
      "website": "https://www.yelp.com/biz/ahli-babas-kabob-shop-burlington",
      "startDate": "2003-05-01",
      "summary": "Prepared and served short order Mediterranean cuisine.\nMaintained a clean kitchen and dining area.\nOperated cash register and performed end-of-day closing procedures.",
      "highlights": [],
      "endDate": "2012-09-01"
    },
    {
      "company": "Greater Burlington YMCA",
      "position": "Older School-Age Coordinator",
      "website": "https://www.gbymca.org/",
      "startDate": "1998-10-01",
      "summary": "Developed and facilitated after school curriculum for children grades 4-6.\nTransported children to/from YMCA\nSupervised Assistant Counselors\nParticipated in cross-site coordinator meetings\nCoordinated inter-mural activities with other YMCA programs\nWrote newsletter to parents/acted as liaison between parents and program director.\nPlanned field trips, games, art projects, and other diversions.\nDesigned and supervised community service projects and fundraising activities",
      "highlights": [],
      "endDate": "2002-06-01"
    }
  ],
  "education": [
    {
      "institution": "State University of New York Empire State College",
      "area": "",
      "studyType": "Bachelor of Science - BS",
      "startDate": "2014-12-31",
      "gpa": "",
      "courses": [],
      "endDate": "2017-12-31"
    },
    {
      "institution": "Monroe Community College",
      "area": "",
      "studyType": "",
      "startDate": "2004-12-31",
      "gpa": "",
      "courses": [],
      "endDate": "2005-12-31"
    },
    {
      "institution": "Community College of Vermont",
      "area": "",
      "studyType": "",
      "startDate": "1997-12-31",
      "gpa": "",
      "courses": [],
      "endDate": "1999-12-31"
    }
  ],
  "skills": [
    {
      "name": "Art",
      "level": "",
      "keywords": []
    },
    {
      "name": "PHP",
      "level": "",
      "keywords": []
    },
    {
      "name": "C++",
      "level": "",
      "keywords": []
    },
    {
      "name": "JavaScript",
      "level": "",
      "keywords": []
    },
    {
      "name": "CoffeeScript",
      "level": "",
      "keywords": []
    },
    {
      "name": "Ruby",
      "level": "",
      "keywords": []
    },
    {
      "name": "Photography",
      "level": "",
      "keywords": []
    },
    {
      "name": "Graphics",
      "level": "",
      "keywords": []
    },
    {
      "name": "Computer Architecture",
      "level": "",
      "keywords": []
    },
    {
      "name": "Photoshop",
      "level": "",
      "keywords": []
    },
    {
      "name": "Illustrator",
      "level": "",
      "keywords": []
    },
    {
      "name": "Web Design",
      "level": "",
      "keywords": []
    },
    {
      "name": "InDesign",
      "level": "",
      "keywords": []
    },
    {
      "name": "Troubleshooting",
      "level": "",
      "keywords": []
    },
    {
      "name": "Creative Direction",
      "level": "",
      "keywords": []
    },
    {
      "name": "Social Networking",
      "level": "",
      "keywords": []
    },
    {
      "name": "Microsoft Office",
      "level": "",
      "keywords": []
    },
    {
      "name": "Problem Solving",
      "level": "",
      "keywords": []
    },
    {
      "name": "Visual Studio",
      "level": "",
      "keywords": []
    },
    {
      "name": "Visual Basic",
      "level": "",
      "keywords": []
    },
    {
      "name": "C#",
      "level": "",
      "keywords": []
    },
    {
      "name": "Technical Support",
      "level": "",
      "keywords": []
    },
    {
      "name": "Digital Printing",
      "level": "",
      "keywords": []
    },
    {
      "name": "Collating",
      "level": "",
      "keywords": []
    },
    {
      "name": "Programming",
      "level": "",
      "keywords": []
    },
    {
      "name": "Photocopier",
      "level": "",
      "keywords": []
    },
    {
      "name": "Scanners",
      "level": "",
      "keywords": []
    },
    {
      "name": "Working With Children",
      "level": "",
      "keywords": []
    },
    {
      "name": "Music Production",
      "level": "",
      "keywords": []
    },
    {
      "name": "Music",
      "level": "",
      "keywords": []
    },
    {
      "name": "Music Theory",
      "level": "",
      "keywords": []
    },
    {
      "name": "Rhythm Guitar",
      "level": "",
      "keywords": []
    },
    {
      "name": "Hand Percussion",
      "level": "",
      "keywords": []
    },
    {
      "name": "Keyboards",
      "level": "",
      "keywords": []
    },
    {
      "name": "Computer Animation",
      "level": "",
      "keywords": []
    },
    {
      "name": "Cooking",
      "level": "",
      "keywords": []
    },
    {
      "name": "Cookies",
      "level": "",
      "keywords": []
    },
    {
      "name": "3D Graphics",
      "level": "",
      "keywords": []
    },
    {
      "name": "Blender",
      "level": "",
      "keywords": []
    },
    {
      "name": "Java",
      "level": "",
      "keywords": []
    },
    {
      "name": "OpenFrameworks",
      "level": "",
      "keywords": []
    },
    {
      "name": "Software Installation",
      "level": "",
      "keywords": []
    },
    {
      "name": "Hardware Installation",
      "level": "",
      "keywords": []
    },
    {
      "name": "Computer Hardware",
      "level": "",
      "keywords": []
    },
    {
      "name": "Digital Cameras",
      "level": "",
      "keywords": []
    },
    {
      "name": "Video Editing",
      "level": "",
      "keywords": []
    },
    {
      "name": "Graphics Layout",
      "level": "",
      "keywords": []
    },
    {
      "name": "Adobe Acrobat",
      "level": "",
      "keywords": []
    },
    {
      "name": "Data Entry",
      "level": "",
      "keywords": []
    },
    {
      "name": "R",
      "level": "",
      "keywords": []
    }
  ],
  "languages": [
    {
      "language": "English",
      "fluency": "Native or bilingual proficiency"
    },
    {
      "language": "Spanish",
      "fluency": "Full professional proficiency"
    }
  ],
  "projects": [
    {
      "name": "Oscillation Painter",
      "startDate": "Invalid date",
      "summary": "Apr 2015",
      "url": "",
      "endDate": "Invalid date"
    }
  ]
}];
work = this.data[0].work;
education = this.data[0].education;
constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewChecked() {
  //  console.log(this.work);
  //  $(".resume-container").html($(".resume-container").html().replace(/(?:\n\r|\r\n|\r|\n)/g, "<br/>"));
  }

}
