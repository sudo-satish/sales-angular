import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Authentication } from './authentication.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    constructor(private authService: Authentication, private router: Router) {

    }
    canActivate() {
        console.log('AuthGuard#canActivate called');
        return this.checkLogin();
        // return true;
    }

    checkLogin() {
        let isLogin = this.authService.isLogin();

        if(isLogin) {
            return true;
        } else {
            this.router.navigate(['/authentication/signup']);
            return false;
        }
    }
}