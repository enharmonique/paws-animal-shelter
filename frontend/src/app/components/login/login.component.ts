import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) { }

  ngOnInit(): void {

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
