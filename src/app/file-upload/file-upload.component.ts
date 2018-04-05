import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FileService} from '../services/file.service';

@Component({
    selector: 'file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  //MIME-Type angeben...
    private file = "data:audio/mp3;base64,";

    constructor(private fs: FileService, private _router: Router) {
    }

    ngOnInit() {
      //Leitet zum Login zurück, wenn token nicht gespeichert.
      if (localStorage.getItem("token") == null){
          this._router.navigate(['login']);
      }
    }

    upload(event) {
        let reader = new FileReader();
        let file = event.target.files[0];
        console.log(event);
        // let fileList: FileList = event.target.files;
        // let file: File = fileList[0];
        // let formData: FormData = new FormData();
        // formData.append('uploadFile', file, file.name);
        // this.fs.upload(formData);

        reader.onloadend = () => {
            this.fs.upload(file.name, file.size, reader.result)
                .then(response => this.loadFile(response.file_id));
        };
        reader.readAsDataURL(file);
    }

    loadFile(id) {
        this.fs.load(id)
            .then(response => {
                this.file = response.text();
            })
    }
}
