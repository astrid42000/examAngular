import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Ordinateur} from '../model/ordinateur';
import {catchError, retry} from 'rxjs/operators';
import {Type} from '../model/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  apiUrl = 'http://localhost:3000/type';
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};

  constructor(private http: HttpClient) { }

  allType(): Observable<Type[]>{
    return this.http.get<Type[]>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.erreur)
      );
  }
  erreur(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
