import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { IUsuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  apiPersonasURL = 'https://api-rest-auth-node.herokuapp.com/auth';

  constructor(private httpClient: HttpClient) {
    console.log('auth service is working')
  }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }  

  login(usuario: IUsuario):Observable<String>{
    console.log('this is the user ',JSON.stringify(usuario))
    return this.httpClient.post<String>(`${this.apiPersonasURL}/signin`, JSON.stringify(usuario), this.httpOptions).pipe(
      retry(1), catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error: any) {
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
