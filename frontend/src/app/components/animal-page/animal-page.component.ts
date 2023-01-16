import { Component, OnInit } from '@angular/core';
import {AnimalService} from "../../service/animal.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Animal} from "../../model/animal.model";
import {AdoptionService} from "../../service/adoption.service";

@Component({
  selector: 'app-animal-page',
  templateUrl: './animal-page.component.html',
  styleUrls: ['./animal-page.component.css']
})
export class AnimalPageComponent implements OnInit {
  id!: string;
  animal!: Animal;

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
        console.log(this.id);
      }
    );
    this.animalService.getAnimalById(this.id).subscribe(
      animal => {
        this.animal = animal;
        console.log(this.animal);
      }
    )
  }

  onAdopt(idAnimal: string) {
    this.adoptionService.addAdoption(
      {
        idAnimal: idAnimal,
        idUser: localStorage.getItem('loggedInUserId'),
        status: null
      }
    ).subscribe();
    alert("Adoption made successfully!");
  }
}
