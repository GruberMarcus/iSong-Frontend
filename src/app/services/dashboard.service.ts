import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { User } from '../models/user';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
/*import { Song } from '../models/song';*/
import { UserService } from './user.service';


@Injectable()
export class DashboardService {
  API_URL = "http://localhost:8000/api/";
  songs = [];

  constructor(private http:Http, public Userservice:UserService) {
  	this.Userservice = Userservice;
    }

    getAllSongs(): Promise<any> {
    const token = this.Userservice.getToken();
    return this.http
     .get(this.API_URL + 'songs?token=' + token)
     .toPromise()
     .then()
     .catch(this.handleError.bind(this));
  }

    getSongsDetail(id):Promise<any> {
    const token = this.Userservice.getToken();
    return this.http
     .get(this.API_URL + 'songs/' + id + '?token=' + token)
     .toPromise()
     .then()
     .catch(this.handleError.bind(this));
  }

  editSong(id, Song):Promise<any> {
  const token = this.Userservice.getToken();
  return this.http
   .put(this.API_URL + 'songs/' + id + '?token=' + token, {title: Song.title, length: Song.length, author: Song.author})
   .toPromise()
   .then()
   .catch(this.handleError.bind(this));
}

   private handleError(error:any): Promise<any>{
    if (error.status === 401) {
     console.log("Token abgelaufen!");
     this.Userservice.logout();
    }
    else {
      console.error('An error occurred: ', error);
    }
    return Promise.reject(error.message || error);
  }


   }
