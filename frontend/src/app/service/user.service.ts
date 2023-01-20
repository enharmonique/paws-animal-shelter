import { HttpClient } from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import {tap, Observable, map} from "rxjs";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string;
  public user: EventEmitter<User>;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
    this.user = new EventEmitter<User>();
  }

  // public getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.usersUrl).pipe(
  //     tap(data => console.log(data))
  //   );
  // }

  public getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.usersUrl + '/' + id).pipe();
  }

  public loginUser(user: User): Observable<any> {
    this.user.emit(user);
    return this.http
      .post(this.usersUrl + '/check', user)
      .pipe(map(
          (res: any) => {
            return res;
          }
        )
      );
  }

  public updateUser(id: string, user: User) {
    const body = JSON.stringify(user);
    return this.http.put<User>(
      this.usersUrl+'/update/'+id,
      body,
      { headers: { 'Content-Type': 'application/json' } }
    );
  }

  public registerUser(user: User): Observable<any> {
    return this.http.post(this.usersUrl, user).pipe(
      map((res: any) => {
        return res
      })
    );
  }
}
