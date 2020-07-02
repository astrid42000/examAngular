import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Ordinateur} from '../model/ordinateur';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdinateurService {
  apiUrl = 'http://localhost:3000/ordinateur';
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};

  constructor(private http: HttpClient){ }

  allOrdi(): Observable<Ordinateur[]>{
    return this.http.get<Ordinateur[]>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.erreur)
      );
  }

  AjoutOrdi(ordi: Ordinateur): Observable<Ordinateur>{
    return this.http.post<Ordinateur>(this.apiUrl, ordi, this.httpOption).pipe(catchError(this.erreur));
  }

  updateOrdi(ordi: Ordinateur){
    return this.http.put<Ordinateur>(this.apiUrl + '/' + ordi.id, ordi, this.httpOption).pipe(catchError(this.erreur));
  }

  ordiById(id: number): Observable<Ordinateur>{
    return this.http.get<Ordinateur>(this.apiUrl + '/' + id)
      .pipe(retry(1), catchError(this.erreur));
  }

  deleteOrdi(id: number): Observable<Ordinateur>{
    return this.http.delete<Ordinateur>(this.apiUrl + '/' + id, this.httpOption).pipe(retry(1), catchError(this.erreur)
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
