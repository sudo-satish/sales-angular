import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class Authentication  {

    constructor(private http: HttpClient) {

    }

    isLogin() {
        return false;
    }

    signup(signupDetail: any) {
        this.http
            .post('/api/register', signupDetail)
            .subscribe((resp) => {
                console.log(resp);
            });
    }
}