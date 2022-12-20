import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.model";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  loggedIn: boolean = false;
  idUser: string | null;
  userLoggedIn!: User;
  constructor(private userService: UserService, private router: Router) {
    this.idUser = '';
    userService.user.subscribe(user => this.onUserLoggedIn(user));
  }

  onUserLoggedIn(user: User) {
    this.userLoggedIn = user;
    if (user != null) {
      this.idUser = localStorage.getItem('loggedInUserId');
      this.loggedIn = true;
    } else {
      localStorage.clear();
      this.loggedIn = false;
    }
  }

  ngOnInit() {
    if (localStorage.getItem('loggedInUserId') != null) {
      this.loggedIn = true;
      this.idUser = localStorage.getItem('loggedInUserId');
    } else {
      this.loggedIn = false;
      this.idUser = '';
    }
  }

  logout() {
    localStorage.clear();
    this.loggedIn = false;
    alert("Logged out successfully!");
    this.router.navigate(['/animals/all']);
  }
}
