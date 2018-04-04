import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { UserService } from './services/user.service';
import { DashboardService } from './services/dashboard.service'

import { LoginComponent } from './login/login.component';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.modules';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MysongsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
  	UserService,
  	DashboardService

  ], 
   bootstrap: [AppComponent]
})
export class AppModule { }
