import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Adoption} from "../model/adoption.model";
import {map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {
  private adoptionsUrl: string;

  constructor(private http: HttpClient) {
    this.adoptionsUrl = 'http://localhost:8080/adoptions';
  }

  public addAdoption(adoption: Adoption): Observable<any> {
    return this.http.post(this.adoptionsUrl+'/add', adoption).pipe(
      map((res: any) => {
        return res
      })
    );
  }

  public getAdoptionsByUserId(id: string): Observable<Adoption[]> {
    return this.http.get<Adoption[]>(this.adoptionsUrl+'/id/'+id).pipe(
      // tap(data => console.log(data))
    );
  }

  public deleteAdoption(id: String): Observable<any> {
    return this.http.delete(this.adoptionsUrl+'/delete/'+id).pipe(
      map((res: any) => {
        return res
      })
    );
  }
}
