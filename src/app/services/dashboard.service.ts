import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { User } from '../models/user';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';


@Injectable()
export class DashboardService {
  API_URL = "http://localhost:8000/api/";
  offers = [];

  constructor(
    private _router:Router, private http:Http) {
    }
    getOffers(start,end) {
        return this.offers.slice(start,end);
    }
    public getMaxNumberOfTodos(): number{
        return this.offers.length;
    }
   }
