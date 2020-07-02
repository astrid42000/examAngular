import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Marque} from '../model/marque';
import {catchError, retry} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Categorie} from '../model/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  apiUrl = 'http://localhost:3000/categorie';
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};
  constructor(private http: HttpClient) { }

  allCat(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.apiUrl)
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
