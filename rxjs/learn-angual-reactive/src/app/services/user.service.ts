import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {User} from "../models/User";
import {HttpClient, HttpHeaders, HttpResponse, HttpClientModule} from "@angular/common/http";
import {map, publishLast, refCount} from "rxjs/operators";

export const UNKNOWN_USER : User = {
  firstName: 'unknown'
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject(UNKNOWN_USER);
  user$ : Observable<User> = this.userSubject.asObservable();
  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) : Observable<User> {
    const headers = new HttpHeaders();
    headers.append('content-type','application/json')
    return this.httpClient.post('/api/login', {email, password}, {headers})
      .pipe(map((user: User) => {
        //const user: User = httpResult.body;
        this.userSubject.next(user);
        console.log(user);
        return user;
      }))
      .pipe(publishLast())
      .pipe(refCount());
  }
}
