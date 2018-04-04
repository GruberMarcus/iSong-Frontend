import { Component, OnInit, ElementRef } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:User[] = [];
  public user = new User();
  public errorMsg = '';

      constructor(
          private _service:UserService, private _router:Router) {
         
          }

      logon() {
        let response = this._service.logon(this.user)
        .then ( resp => {
          localStorage.setItem("name", this.user.name);
          localStorage.setItem("token", JSON.parse(resp._body)["token"]);
          this._router.navigate(['dashboard']);
        });
      }



  ngOnInit() {
    //console.log(localStorage);
    document.body.classList.add('bg-img');

    // Leitet zum Dashboard weiter, wenn der localStorage nicht leer ist.
    if (localStorage.getItem("name") != null){
        this._router.navigate(['dashboard']);
    }
  }
}
