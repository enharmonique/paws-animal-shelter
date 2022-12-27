import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  type:string="password";
  isText: boolean = false;
  eyeICon: string ="fa-eye-slash"


  registerForm:any = FormGroup;
  submitted = false;
  constructor( private formBuilder: FormBuilder){}
//Add user form actions
  get f() { return this.registerForm.controls; }
  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    //True if all the fields are filled
    let routerLink;
    if (this.submitted) {
      routerLink = "/events";
    }

  }

  ngOnInit() {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
      firstName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      lastName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeICon = "fa-eye": this.eyeICon ="fa-eye-slash";
    this.isText ? this.type="text" : this.type = "password"
  }
}
