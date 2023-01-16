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
  favBtnEnabled = false;

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
    this.wishlistService.getWishlistByUserId(this.id!).subscribe(
      wishlistEntries => {
        this.wishlist = wishlistEntries;
      }
    );
  }

  onFavorite(animal: Animal) {
    for (let wishlistEntry of this.wishlist) {
      if (wishlistEntry.animal.id == animal.id) {
        return true;
      }
    }
    return false;
  }

  getWishlistEntryByAnimalId(id: String) {
    for (let wishlistEntry of this.wishlist) {
      if (wishlistEntry.animal.id == id) {
        return wishlistEntry.id;
      }
    }
    return null;
  }

  onAddToWishlist(animal: Animal) {
    this.wishlistService.addWishlistEntry(
      {
        idUser: localStorage.getItem('loggedInUserId'),
        animal: animal,
      }
    ).subscribe();
    alert("Animal added to wishlist successfully!");
    window.location.reload()
  }

  onDeleteWishlistEntry(animal: Animal) {
    if (this.getWishlistEntryByAnimalId(animal.id!)) {
      let id = this.getWishlistEntryByAnimalId(animal.id!);
      if (id != null) {
        this.wishlistService.deleteWishlistEntry(id).subscribe();
        alert("Animal was deleted from wishlist successfully!");
        window.location.reload()
      }
    }
  }
}
