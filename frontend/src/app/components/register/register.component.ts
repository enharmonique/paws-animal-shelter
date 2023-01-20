import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
      'address': new FormControl(null, [Validators.required]),
      'age': new FormControl(null, [Validators.required]),
      'profilePicturePath': new FormControl(null, [Validators.required])
    });
  }
  constructor(private userService: UserService, private router: Router){
  }

  onSubmit() {
    this.userService.registerUser(
      {
        username: this.registerForm.value['username'],
        password: this.registerForm.value['password'],
        address: this.registerForm.value['address'],
        age: this.registerForm.value['age'],
        profilePicturePath: this.registerForm.value['profilePicturePath']
      }).subscribe((res) => {
      if(res.errorFlag == false){
        localStorage.clear();
        alert("You are sign up! Please log in!");
        this.router.navigate(['/login']).then(r => window.location.reload());
      } else {
        alert("Some of the fields are incorrect!");
        this.registerForm.reset();
      }
    });
  }

}
