import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
        'username': new FormControl(null, [Validators.required]),
        'password': new FormControl(null, [Validators.required]),
    });
  }
  constructor(private userService: UserService, private router: Router){}

  onSubmit() {
    console.log(this.loginForm);
    this.userService.loginUser(
      {
        username: this.loginForm.value['username'],
        password: this.loginForm.value['password']
      }).subscribe((res) => {
        if(res.errorFlag == false){
          localStorage.setItem('loggedInUserId', res.entity.id);
          alert("Logged in successfully!");
          this.router.navigate(['users', 'profile']);
        }
    });
  }
}
