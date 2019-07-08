import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jockey } from '../shared/jockey';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch jockeys list
  getJockeys(): Observable<Jockey> {
    return this.http.get<Jockey>(this.apiURL + '/jockeys')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch jockey
  getJockey(id): Observable<Jockey> {
    return this.http.get<Jockey>(this.apiURL + '/jockeys/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create jockey
  createJockey(jockey): Observable<Jockey> {
    return this.http.post<Jockey>(this.apiURL + '/jockeys', JSON.stringify(jockey), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update jockey
  updateJockey(id, jockey): Observable<Jockey> {
    return this.http.put<Jockey>(this.apiURL + '/jockeys/' + id, JSON.stringify(jockey), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete jockey
  deleteJockey(id){
    return this.http.delete<Jockey>(this.apiURL + '/jockeys/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
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