import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AnimalService} from "../../service/animal.service";
import {AdoptionService} from "../../service/adoption.service";

@Component({
  selector: 'app-add-animal-form',
  templateUrl: './add-animal-form.component.html',
  styleUrls: ['./add-animal-form.component.css']
})
export class AddAnimalFormComponent implements OnInit {
  animalForm!: FormGroup;
  ngOnInit(): void {
    this.animalForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'type': new FormControl(null, [Validators.required]),
      'breed': new FormControl(null, [Validators.required]),
      'age': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'imagePath': new FormControl(null, [Validators.required])
    });
  }
  constructor(private animalService: AnimalService,
              private adoptionsService: AdoptionService,
              private router: Router){}
  onSubmit() {
    const now = new Date();
    this.animalService.addAnimal(
      {
        name: this.animalForm.value['name'],
        type: this.animalForm.value['type'],
        breed: this.animalForm.value['breed'],
        age: this.animalForm.value['age'],
        description: this.animalForm.value['description'],
        dateAdded: now.toLocaleDateString(),
        imagePath: this.animalForm.value['imagePath']
      }).subscribe((res) => {
      if(res.errorFlag == false){
        alert("Animal was added!");
        this.router.navigate(['animals','all']);
      }
    });
  }
}
