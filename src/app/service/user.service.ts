import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap, Observable } from "rxjs";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  // public getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.usersUrl).pipe(
  //     tap(data => console.log(data))
  //   );
  // }

  public getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.usersUrl+'/'+id).pipe(
      tap(data => console.log(data))
    );
  }

  // public updateUser(id: string, user: User) {
  //   const body = JSON.stringify(user);
  //   return this.http.put<User>(
  //     this.usersUrl+'/update/'+id,
  //     body,
  //     { headers: { 'Content-Type': 'application/json' } }
  //   );
  // }
}
