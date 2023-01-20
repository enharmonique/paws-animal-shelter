import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userForm!: FormGroup;
  id!: string | null;
  loggedInUser: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
    this.loggedInUser = new User();
  }

  ngOnInit(): void {
    this.id = localStorage.getItem('loggedInUserId');
    this.userService.getUserById(this.id!).subscribe(
      user => {
      this.loggedInUser = user;
        this.userForm = new FormGroup({
          'username': new FormControl(this.loggedInUser.username, [Validators.required]),
          'password': new FormControl(null, [Validators.required]),
          'address': new FormControl(this.loggedInUser.address, [Validators.required]),
          'age': new FormControl(this.loggedInUser.age, [Validators.required]),
          'description': new FormControl(this.loggedInUser.description, [Validators.required]),
          'profilePicturePath': new FormControl(this.loggedInUser.profilePicturePath, [Validators.required])
        });
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.loggedInUser.username = this.userForm.value['username'];
      this.loggedInUser.password = this.userForm.value['password'];
      this.loggedInUser.age = this.userForm.value['age'];
      this.loggedInUser.description = this.userForm.value['description'];
      this.loggedInUser.profilePicturePath = this.userForm.value['profilePicturePath'];
      this.userService.updateUser(this.id!,this.loggedInUser).subscribe();
      alert("Your profile details are saved!");
      this.router.navigate(['users', 'profile']).then(r => window.location.reload());
    } else {
      alert("Your profile details are incorrect!");
    }
  }

}
