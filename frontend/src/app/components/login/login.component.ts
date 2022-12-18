import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormGroup,Validators,FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginObj: any = {
  //   userName: '',
  //   password:''
  // };
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
      routerLink = "/signup";
    }

  }
  ngOnInit() {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  // onLogin() {
  //   if(this.loginObj.userName == 'user123' && this.loginObj.password =='user@123') {
  //     localStorage.setItem('role','user');
  //     this.router.navigateByUrl('http://localhost:4200/');
  //   } else if (this.loginObj.userName == 'admin' && this.loginObj.password =='admin@123') {
  //     localStorage.setItem('role','admin');
  //     this.router.navigateByUrl('http://localhost:4200/');
  //   }
  // }


  hideShowPass(){
      this.isText = !this.isText;
      this.isText ? this.eyeICon = "fa-eye": this.eyeICon ="fa-eye-slash";
      this.isText ? this.type="text" : this.type = "password"
  }
}
