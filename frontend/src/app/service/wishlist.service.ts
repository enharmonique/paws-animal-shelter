import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {WishlistEntry} from "../model/wishlistEntry.model";

@Injectable({
  providedIn: 'root'
})
export class WishlistService{
  private wishlistUrl: string;

  constructor(private http: HttpClient) {
    this.wishlistUrl = 'http://localhost:8080/wishlist';
  }

  public addWishlistEntry(wishlistEntry: WishlistEntry): Observable<any> {
    return this.http.post(this.wishlistUrl+'/add/', wishlistEntry).pipe(
      map((res: any) => {
        return res
      })
    );
  }

  public deleteWishlistEntry(id: String): Observable<any> {
    return this.http.delete(this.wishlistUrl+'/delete/'+id).pipe(
      map((res: any) => {
        return res
      })
    );
  }

  public getWishlistByUserId(id: string): Observable<WishlistEntry[]> {
    return this.http.get<WishlistEntry[]>(this.wishlistUrl+'/id/'+id).pipe(
      tap(data => console.log(data))
    );
  }
}
