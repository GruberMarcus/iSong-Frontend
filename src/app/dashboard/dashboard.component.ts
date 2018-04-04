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

    currentPage: number;
    start: number;
    end: number;
    getData:any;
    renderedSongs:any;

    constructor(private Dashboardservice:DashboardService){
        this.currentPage = 1;

        this.start = 0;
        this.end = 4;

        //this.renderedTodos = todoService.getOffers();
        //console.log(this.renderedTodos.length);
    }

	ngOnInit() {
         }

    switchPage(direction: number){
        if(direction > 0) this.currentPage = this.currentPage - 1;
        else this.currentPage = this.currentPage + 1;

        this.start = (this.currentPage - 1) * 4;
        this.end = this.currentPage * 4;

        this.renderedSongs = this.Dashboardservice.getSongs(this.start, this.end);
        if (this.end > this.renderMaxNumberOfSongs()) {
            this.end = this.renderMaxNumberOfSongs();
        }
    }
    startReached():boolean{
        return this.currentPage == 1;
    }
    endReached():boolean{
        return this.currentPage >= (this.Dashboardservice.getMaxNumberOfSongs() / 4);
    }
    nextPage(){
        if(this.currentPage < (this.Dashboardservice.getMaxNumberOfSongs() / 4)) this.switchPage(-1);
    }
    renderMaxNumberOfSongs(){
        return this.Dashboardservice.getMaxNumberOfSongs();
    }
    previousPage(){
        if(this.currentPage > 1) this.switchPage(1);
    }
}

}