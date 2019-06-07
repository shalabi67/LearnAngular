import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private http:Http) { }

  subscribeToNewsletter(email: string): Observable<any> {
    return this.http.post('/api/newsletter', {email});
  }
}
