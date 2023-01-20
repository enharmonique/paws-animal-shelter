import { Component, OnInit } from '@angular/core';
import {AnimalService} from "../../service/animal.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Animal} from "../../model/animal.model";
import {AdoptionService} from "../../service/adoption.service";
import {Adoption} from "../../model/adoption.model";

@Component({
  selector: 'app-animal-page',
  templateUrl: './animal-page.component.html',
  styleUrls: ['./animal-page.component.css']
})
export class AnimalPageComponent implements OnInit {
  id!: string;
  animal!: Animal;
  loggedInUserId!: string | null;
  adoptions: Adoption[] = [];

  constructor(private animalService: AnimalService,
              private adoptionService: AdoptionService,
              private route: ActivatedRoute) {
    this.id = '';
    this.animal = new Animal();
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
    this.animalService.getAnimalById(this.id).subscribe(
      animal => {
        this.animal = animal;
      }
    )
    this.loggedInUserId = localStorage.getItem('loggedInUserId');
    this.adoptionService.getAdoptionsByUserId(this.loggedInUserId!).subscribe(
      adoptions => {
        this.adoptions = adoptions;
      }
    );
  }

  isAdopted() {
    for (let adoption of this.adoptions) {
      if (adoption.idAnimal == this.id) {
        return true;
      }
    }
    return false;
  }

  onAdopt(idAnimal: string) {
    if (this.isAdopted()) {
      alert("You've already adopted this animal!");
    } else {
      this.adoptionService.addAdoption(
        {
          idAnimal: idAnimal,
          idUser: localStorage.getItem('loggedInUserId'),
          status: null
        }
      ).subscribe();
      alert("Animal was adopted to our adoptions list!");
      window.location.reload();
    }
  }
}
