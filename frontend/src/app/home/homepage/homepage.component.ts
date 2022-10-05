import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  formCheck:any;
  formMessage:any = "Ware House Services: Register Now";

  constructor() { }

  ngOnInit(): void {
  }

  formSubmitted(value:any){
    if(value == "Submitted"){
       this.formMessage = "Form submitted. Thanks for showing Interest"
    }
  }

}
