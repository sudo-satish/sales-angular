import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ChttpService {
    environment = environment;

    constructor(
        public http: HttpClient
    ) {

    }

    get(url) {
        let token = localStorage.getItem('token');
        let getHeaders: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        
        url = environment.url+url;
        return this.http.get(url, { headers: getHeaders });
    }

    put(url, data) {
        let token = localStorage.getItem('token');
        let getHeaders: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });

        url = environment.url + url;
        return this.http.put(url, data, { headers: getHeaders });
    }

    post(url, data) {
        let token = localStorage.getItem('token');
        let getHeaders: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });

        url = environment.url + url;
        return this.http.post(url, data, { headers: getHeaders });
    }

    delete(url, data?) {

        let token = localStorage.getItem('token');
        let getHeaders: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });

        url = environment.url + url;
        return this.http.delete(url, { headers: getHeaders });
    }
}