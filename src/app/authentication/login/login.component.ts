import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Authentication } from '../authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

    loginForm: FormGroup;

    constructor(public router: Router, private fb: FormBuilder, private authService: Authentication) {}

    ngOnInit() {

        this.loginForm = this.fb.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required],
        });
    }

    ngAfterViewInit() {
        $(function() {
            $(".preloader").fadeOut();
        });
        
        $('#to-recover').on("click", function() {
            $("#loginform").slideUp();
            $("#recoverform").fadeIn();
        });
    }

    onLoggedin() {
        this.authService.login(this.loginForm.value);
    }

}
