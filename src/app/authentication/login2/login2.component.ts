import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login2.component.html',
    styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit, AfterViewInit {

    constructor(public router: Router) {}

    ngOnInit() {}

    ngAfterViewInit() {
        $(function() {
            $(".preloader").fadeOut();
        });
        
        $('#to-recover').on("click", function() {
            $("#loginform").slideUp();
            $("#recoverform").fadeIn();
        });
    }

}
