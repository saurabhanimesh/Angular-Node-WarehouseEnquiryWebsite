import { Component, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormSubmitService } from '../../../form-submit.service';
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-formsignup',
  templateUrl: './formsignup.component.html',
  styleUrls: ['./formsignup.component.scss']
})
export class FormsignupComponent implements OnInit {

  registrationDetails:any;
  checkPhone:string = "";
  @Output() formSubmitted = new EventEmitter<any>()

  constructor(private ngxLoader: NgxUiLoaderService, private registrationService: FormSubmitService ) { }

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNo: new FormControl(''),
    requirement: new FormControl(''),
    });

  ngOnInit(): void {
    this.profileForm.controls['name'].setValidators([Validators.required,Validators.minLength(5)])
    this.profileForm.controls['email'].setValidators([Validators.required,Validators.email])
    this.profileForm.controls['phoneNo'].setValidators([Validators.required])
    this.profileForm.controls['requirement'].setValidators([Validators.required])
  }

  signUp(){

    if(this.profileForm.controls["name"].errors || this.profileForm.controls["email"].errors ||  this.profileForm.controls["phoneNo"].errors || this.profileForm.controls["requirement"].errors){
       
    }else{
      this.registrationDetails = {
        name: this.profileForm.value.name,
        email: this.profileForm.value.email,
        phoneNo: this.profileForm.value.phoneNo,
        requirement: this.profileForm.value.requirement
     }
      this.ngxLoader.start();
      this.registrationService.signUpSubmit(this.registrationDetails).subscribe(response => {
       console.log("connection built")
       this.ngxLoader.stop();
       this.formSubmitted.emit("Submitted")
      })
    }
  }

}
