import {Component, OnInit} from '@angular/core';
import {Animal} from "../../model/animal.model";
import {AnimalService} from "../../service/animal.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AdoptionService} from "../../service/adoption.service";
import {WishlistService} from "../../service/wishlist.service";
import {WishlistEntry} from "../../model/wishlistEntry.model";

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  id!: string | null;
  animals: Animal[] = [];
  wishlist: WishlistEntry[] = [];
  type!: string;
  searchString!: string;
  areAnimals = true;

  constructor(private animalService: AnimalService,
              private adoptionService: AdoptionService,
              private wishlistService: WishlistService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = localStorage.getItem('loggedInUserId');
    this.route.params.subscribe(
      (params: Params) => {
        if (params['type']) {
          this.type = params['type'];
          if (this.type != 'all') {
            this.animalService.getAnimalsByType(this.type).subscribe(
              animals => {
                this.animals = animals;
              }
            );
          } else {
            this.animalService.getAnimals().subscribe(
              animals => {
                this.animals = animals;
              }
            );
          }
        } else if (params['search']) {
          this.searchString = params['search'];
          this.animalService.getAnimalsBySearch(this.searchString).subscribe(
            animals => {
              this.animals = animals;
              if (this.animals.length > 0) {
                this.areAnimals = true;
              } else {
                this.areAnimals = false;
              }
            }
          );
        }
      }
    );
    if (this.id != null) {
      this.wishlistService.getWishlistByUserId(this.id!).subscribe(
        wishlistEntries => {
          this.wishlist = wishlistEntries;
        }
      );
    }
  }

  onFavorite(animal: Animal) {
    for (let wishlistEntry of this.wishlist) {
      if (wishlistEntry.idAnimal == animal.id) {
        return true;
      }
    }
    return false;
  }

  getWishlistEntryByAnimalId(id: String) {
    for (let wishlistEntry of this.wishlist) {
      if (wishlistEntry.idAnimal == id) {
        return wishlistEntry.id;
      }
    }
    return null;
  }

  onAddToWishlist(animal: Animal) {
    this.wishlistService.addWishlistEntry(
      {
        idUser: localStorage.getItem('loggedInUserId'),
        idAnimal: animal.id!,
      }
    ).subscribe();
    window.location.reload()
  }

  onDeleteWishlistEntry(animal: Animal) {
    if (this.getWishlistEntryByAnimalId(animal.id!)) {
      let id = this.getWishlistEntryByAnimalId(animal.id!);
      if (id != null) {
        this.wishlistService.deleteWishlistEntry(id).subscribe();
        window.location.reload()
      }
    }
  }
}
