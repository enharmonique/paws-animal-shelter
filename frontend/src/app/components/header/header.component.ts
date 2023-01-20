import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.model";
import {AnimalService} from "../../service/animal.service";
import {FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  loggedIn: boolean = false;
  idUser: string | null;
  userLoggedIn!: User;
  searchForm!: FormGroup;

  constructor(
    private userService: UserService,
    private animalsService: AnimalService,
    private router: Router) {
    this.idUser = '';
    this.userLoggedIn = new User();
    userService.user.subscribe(user => this.onUserLoggedIn(user));
  }

  onUserLoggedIn(user: User) {
    this.userLoggedIn = user;
    if (localStorage.getItem('loggedInUserId') != null) {
      this.idUser = localStorage.getItem('loggedInUserId');
      this.loggedIn = true;
    } else {
      localStorage.clear();
      this.loggedIn = false;
    }
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'searchString': new FormControl(null)
    });

    if (localStorage.getItem('loggedInUserId') != null) {
      this.loggedIn = true;
      this.idUser = localStorage.getItem('loggedInUserId');
      this.userService.getUserById(this.idUser!).subscribe(
        user => {
          this.userLoggedIn = user;
        }
      );
    } else {
      this.loggedIn = false;
      this.idUser = '';
    }
  }

  logout() {
    localStorage.clear();
    this.loggedIn = false;
    this.router.navigate(['/animals/all']).then(r => window.location.reload());
  }

  onSubmit() {
    let searchString = this.searchForm.value['searchString'];
    this.router.navigate(['animals', 'search', searchString]).then(r => window.location.reload());
  }
}
