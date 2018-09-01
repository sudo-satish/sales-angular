import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Authentication } from '../authentication.service';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../../shared/services/alert.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {

    loginForm: FormGroup;
    alertSB : Subscription;
    message: String;

    constructor(
        public router: Router, 
        private fb: FormBuilder, 
        private authService: Authentication,
        private http: HttpClient,
        private alert: AlertService,
        private toastr: ToastrService
    ) {}

    ngOnInit() {

        this.message = `Enter your Email and instructions will be sent to you! `;
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

    sendResetLink(resetEmail: ElementRef) {
        let email = $(resetEmail).val();
        
        let url = `/api/password/email`;
        this.alertSB = this
            .http
            .post(url, { email: email})
            .subscribe(response => {
                this.message = response['status'];
                console.log(response);
                if (response['status_code'] == 403) {
                    this.toastr.error(response['status'], '');
                } 
                
                if (response['status_code'] == 200) {
                    this.toastr.success(response['status'], '');
                }
                
            }, err => {
                this.message = err['message']

                // console.log();
                
            })
    }

    onLoggedin() {
        this.authService.login(this.loginForm.value);
    }

    ngOnDestroy() {
        if (this.alertSB) this.alertSB.unsubscribe();
    }
}
