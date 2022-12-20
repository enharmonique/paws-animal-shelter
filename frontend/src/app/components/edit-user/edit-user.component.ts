import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userForm!: FormGroup;
  id!: string;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
      'address': new FormControl(null, [Validators.required]),
      'age': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'profilePicturePath': new FormControl(null, [Validators.required])
    });
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
  }

  onSubmit() {
    this.userService.updateUser(
      this.id,
      {
        username: this.userForm.value['username'],
        password: this.userForm.value['password'],
        age: this.userForm.value['age'],
        description: this.userForm.value['description'],
        profilePicturePath: this.userForm.value['profilePicturePath']
      }).subscribe();
    this.router.navigate(['/animals/all']);
  }

}
