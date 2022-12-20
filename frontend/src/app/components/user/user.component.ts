import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.model";
import {Adoption} from "../../model/adoption.model";
import {AdoptionService} from "../../service/adoption.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: User;
  id!: string | null;
  adoptions: Adoption[] = [];

  constructor(private userService: UserService,
              private adoptionsService: AdoptionService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.id = localStorage.getItem('loggedInUserId');
    this.userService.getUserById(this.id!).subscribe(
      user => {
        this.user = user;
      }
    );
    this.adoptionsService.getAdoptionsByUserId(this.id!).subscribe(
      adoptions => {
        this.adoptions = adoptions;
      }
    );
  }
}
