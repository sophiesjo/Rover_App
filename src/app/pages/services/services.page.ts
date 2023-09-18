import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  searchTerm: string;
  items = [
    {artName: "CASUAL"}
  ]
  sitter = [
    {
        "name": "Jane Doe",
        "services": "Boarding",
        "expertise": "House plants",
        "photo": "../../../assets/images/avatar1.jpg"
    },
    {
      "name": "Hoben Harm",
      "services": "Day care and Drop-In",
      "expertise": "House plants",
      "photo":"../../../assets/images/avatar2.jpg"
    },
    {
      "name": "Chrissy Sev",
      "services": "Drop-In",
      "expertise": "Outdoor gardens",
      "photo": "../../../assets/images/avatar3.jpg"
    },
    {
      "name": "Trow DeWats",
      "services": "Day care",
      "expertise": "Outdoor gardens",
      "photo": "../../../assets/images/avatar4.jpg"
    },
    {
      "name": "Fab Uptons",
      "services": "Day care and Boarding",
      "expertise": "Outdoor gardens",
      "photo": "../../../assets/images/avatar5.jpg"
    },

  ];


  constructor() { 
  }
  ngOnInit() {
  }

}
