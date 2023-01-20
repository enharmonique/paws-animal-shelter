import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.model";
import {Adoption} from "../../model/adoption.model";
import {AdoptionService} from "../../service/adoption.service";
import {Router} from "@angular/router";
import {AnimalService} from "../../service/animal.service";
import {Animal} from "../../model/animal.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: User;
  id!: string | null;
  adoptions: Adoption[] = [];
  animals: Animal[] = [];

  constructor(private userService: UserService,
              private adoptionsService: AdoptionService,
              private animalsService: AnimalService,
              private router: Router) {
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
        for (let adoption of adoptions) {
          this.animalsService.getAnimalById(adoption.idAnimal).subscribe(
            animal => {
              this.animals.push(animal);
            }
          );
        }
      }
    );
  }

  goToAddAnimal() {
    this.router.navigate(['/animals/add']);
  }

  goToEditProfile() {
    this.router.navigate(['/users/edit']);
  }

  getAdoptionByAnimalId(id: String) {
    for (let adoption of this.adoptions) {
      if (adoption.idAnimal == id) {
        return adoption.id;
      }
    }
    return null;
  }

  removeFromAdoptions(animal: Animal) {
    if (this.getAdoptionByAnimalId(animal.id!)) {
      let id = this.getAdoptionByAnimalId(animal.id!);
      if (id != null) {
        this.adoptionsService.deleteAdoption(id).subscribe();
      }
    }
  }
}
