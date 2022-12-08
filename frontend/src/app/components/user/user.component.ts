import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Params} from "@angular/router";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: User;
  id!: string;

  constructor(private userService: UserService,
              private route: ActivatedRoute) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.userService.getUserById(this.id).subscribe(
          user => {
            this.user = user;
            console.log(user);
          }
        )
      }
    );
  }

}
