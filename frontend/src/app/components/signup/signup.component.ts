import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  type:string="password";
  isText: boolean = false;
  eyeICon: string ="fa-eye-slash"


  constructor() { }

  ngOnInit(): void {
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeICon = "fa-eye": this.eyeICon ="fa-eye-slash";
    this.isText ? this.type="text" : this.type = "password"
  }
}
