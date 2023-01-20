import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  loggedInUserId!: string | null;

  constructor() { }

  ngOnInit(): void {
    this.loggedInUserId = localStorage.getItem('loggedInUserId');
  }

}
