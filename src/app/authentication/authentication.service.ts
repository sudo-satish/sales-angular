import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class Authentication  {

    constructor(private http: HttpClient, private router: Router) {

    }

    isLoggedIn() {
        let isLogined = localStorage.getItem('isLoggedin');
        if(isLogined) {
            return true;
        } else {
            return false;
        }
    }

    logout() {
        localStorage.setItem('userDetail', '');
        localStorage.setItem('isLoggedin', '');
        this.router.navigate(['/authentication/login']);
    }

    getUser() {
        if(this.isLoggedIn) {
            let userDetail = localStorage.getItem('userDetail');
            return JSON.parse(userDetail);
        } else {
            return {}
        }
    }

    signup(signupDetail: any) {
        this.http
            .post('/api/register', signupDetail)
            .subscribe((resp) => {
                console.log(resp);
                let token = resp['success'].token;
                localStorage.setItem('token', token);
                
                if (token) {
                    this.setUserDetail(token);
                }

            }, (err) => {
                console.log(' Err => ', err);
            });
    }
    
    login(loginDetail: any) {
        this.http
            .post('/api/login', loginDetail)
            .subscribe((resp) => {
                console.log(resp);
                let token = resp['success'].token;
                localStorage.setItem('token', token);
                
                if (token) {
                    this.setUserDetail(token);
                }

            }, (err) => {
                console.log(' Err => ', err);
            });
    }

    setUserDetail(token) {
        this.http
            .get('/api/details')
            .subscribe((resp) => {
                let userDetail = resp['success'];
                if (userDetail) {
                    userDetail = JSON.stringify(userDetail);
                    localStorage.setItem('userDetail', userDetail);
                    localStorage.setItem('isLoggedin', 'true');
                    this.router.navigate(['/']);
                }
            }, (err) => {
                console.log(' Err => ', err);
            });
    }
}