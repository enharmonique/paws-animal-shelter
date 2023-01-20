import { HttpClient } from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import {tap, Observable, map} from "rxjs";
import {Animal} from "../model/animal.model";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animalsUrl: string;
  public onSearchAnimals: EventEmitter<string>;

  constructor(private http: HttpClient) {
    this.animalsUrl = 'http://localhost:8080/animals';
    this.onSearchAnimals = new EventEmitter<string>();
  }

  public getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalsUrl).pipe();
  }

  public getAnimalsByType(type: string): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalsUrl+'/type/'+type).pipe(
      // tap(data => console.log(data))
    );
  }

  public getAnimalsBySearch(searchString: string): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalsUrl+'/search/'+searchString).pipe(
      // tap(data => console.log(data))
    );
  }

  public getAnimalById(id: string): Observable<Animal> {
    return this.http.get<Animal>(this.animalsUrl+'/'+id).pipe(
      // tap(data => console.log(data))
    );
  }

  public addAnimal(animal: Animal): Observable<any> {
    return this.http.post(this.animalsUrl, animal).pipe(
      map((res: any) => {
        return res
      })
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
