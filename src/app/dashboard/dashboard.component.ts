import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { DashboardService } from '../services/dashboard.service';

/*import { Song } from '../models/song';*/


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    getData:any;
    renderedSongs:any;

    constructor(private ds:DashboardService, private _router: Router){
    }

	ngOnInit() {
    //Leitet zum login zurück, wenn token nicht gespeichert...
    if (localStorage.getItem("token") == null){
        this._router.navigate(['login']);
    }
  }

}
