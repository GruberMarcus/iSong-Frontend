import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MysongsComponent } from './dashboard/mysongs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileUploadComponent } from './file-upload/file-upload.component';




const routes: Routes = [
    { path: "", component: LoginComponent, pathMatch: 'full' },
    { path: "login", component: LoginComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "mysongs", component: MysongsComponent },
    { path: "upload", component: FileUploadComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
