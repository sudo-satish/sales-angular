import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Authentication } from '../authentication.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup; 
    constructor(private fb: FormBuilder, private authService: Authentication) { }

    ngOnInit() { 
        this.signupForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            c_password: ['', Validators.required],
            i_agree: ['', [Validators.required]]
        })
    }

    onSignup() {
        this.authService.signup(this.signupForm.value);
    }
}
