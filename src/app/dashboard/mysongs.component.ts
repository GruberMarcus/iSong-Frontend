import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { DashboardService } from '../services/dashboard.service';


@Component({
  selector: 'app-mysongs',
  templateUrl: './mysongs.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class MysongsComponent implements OnInit {

  constructor(private ds: DashboardService, private _router: Router){

  }

	ngOnInit() {
    if (localStorage.getItem("token") == null){
        this._router.navigate(['login']);
    }
    }

}
