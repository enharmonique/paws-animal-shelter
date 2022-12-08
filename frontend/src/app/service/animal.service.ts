import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap, Observable } from "rxjs";
import {Animal} from "../model/animal.model";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animalsUrl: string;

  constructor(private http: HttpClient) {
    this.animalsUrl = 'http://localhost:8080/animals';
  }

  public getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalsUrl).pipe(
      tap(data => console.log(data))
    );
  }

  public getAnimalById(id: string): Observable<Animal> {
    return this.http.get<Animal>(this.animalsUrl+'/'+id).pipe(
      tap(data => console.log(data))
    );
  }

  // public updateAnimal(id: string, animal: Animal) {
  //   const body = JSON.stringify(animal);
  //   return this.http.put<Animal>(
  //     this.animalsUrl+'/update/'+id,
  //     body,
  //     { headers: { 'Content-Type': 'application/json' } }
  //   );
  // }
}
