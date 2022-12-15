import { Component, OnInit } from '@angular/core';
import {Animal} from "../../model/animal.model";
import {AnimalService} from "../../service/animal.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animals: Animal[] = [];
  type!: string;

  constructor(private animalService: AnimalService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.type = params['type'];
        if (this.type != 'all') {
          this.animalService.getAnimalsByType(this.type).subscribe(
            animals => {
              this.animals = animals;
              console.log(animals);
            }
          );
        } else {
          this.animalService.getAnimals().subscribe(
            animals => {
              this.animals = animals;
              console.log(animals);
            }
          );
        }
      }
    );
  }

  onAdopt() {

  }
}
