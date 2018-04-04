import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { UserService } from './services/user.service';
import { DashboardService } from './services/dashboard.service';
import { FileService } from './services/file.service';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MysongsComponent } from './dashboard/mysongs.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.modules';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MysongsComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
  	UserService,
  	DashboardService,
  	FileService

  ], 
   bootstrap: [AppComponent]
})
export class AppModule { }
