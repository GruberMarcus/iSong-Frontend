import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FileService {

    API_URL = 'http://localhost:8000/api/files';

    constructor(private http: Http) { }
    upload(name: string, size: number, data: any) {
        // let headers = new Headers({'Content-Type': 'multipart/form-data'});
        // let options = new RequestOptions({headers: headers});
        return this.http
            .post(this.API_URL, {
                'name': name,
                'size': size,
                'data': data
            })
            .toPromise()
            .then(response => response.json());
    }

    load(id) {
        return this.http.get(this.API_URL + '/' + id)
            .toPromise()
            .then(response => response);

    }
}
