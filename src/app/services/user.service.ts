import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { User } from '../models/user';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';


@Injectable()
export class UserService {
  API_URL = "http://localhost:8000/api/";

  constructor(
    private _router:Router, private http:Http) {
    }

  // Leert den LocalStorage und leitet zurück auf die Login-Seite.
  logout() {
    localStorage.clear();
    this._router.navigate(['login']);
  }

  // Sollte der Eintrag "name" leer sein (also wenn das LocalStorage leer ist),
  // wird er auf die Login-Seite zurückgeleitet. getToken() wird in jeder Service-
  // Methode verwendet, um den korrekten HTTP-Pfad zu erhalten.
  getToken() {
    if (localStorage.getItem("email") === null){
      this._router.navigate(['login']);
    }
    return localStorage.getItem('token');
  }

 

  // Führt eine POST-Methode aus in localhost:8000/api, um
  // den Benutzer einzuloggen.
  logon(user:any): Promise<any> {
    return this.http
     .post(this.API_URL, {email: user.email, password: user.password})
     .toPromise()
     .catch(this.handleError);
  }


  private handleError(error:any): Promise<any> {
    console.error('An error occurred: ', error);
    return Promise.reject(error.message || error);
  }
}
