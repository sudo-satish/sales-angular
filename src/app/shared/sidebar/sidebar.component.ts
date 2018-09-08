import { Component, AfterViewInit, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ROUTES } from './menu-items';
import { RouteInfo } from "./sidebar.metadata";
import { Router, ActivatedRoute } from "@angular/router";
import { Authentication } from '../../authentication/authentication.service';
declare var $: any;
@Component({
  selector: 'ap-sidebar',
  templateUrl: './sidebar.component.html'
  
})
export class SidebarComponent implements OnInit, AfterViewInit {
	
    user;

    showMenu: string = '';
    showSubMenu: string = '';
    public sidebarnavItems: any[];
    //this is for the open close
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
            
        } else {
            this.showMenu = element; 
        }
    }
    addActiveClass(element: any) {
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';
            
        } else {
            this.showSubMenu = element; 
        }
    }
    
    constructor(
        private modalService: NgbModal, 
        private router: Router,
        private route: ActivatedRoute,
        public authService: Authentication
    ) {
        
    } 
    // End open close
    ngOnInit() {
        this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
        $(function () {
            $(".sidebartoggler").on('click', function() {
                if ($("#main-wrapper").hasClass("mini-sidebar")) {
                    $("body").trigger("resize");
                    $("#main-wrapper").removeClass("mini-sidebar");
                     
                } else {
                    $("body").trigger("resize");
                    $("#main-wrapper").addClass("mini-sidebar");
                }

                // $('.collapse.in').on('click', function () {
                //     console.log('hjhjhjhkhk');
                    
                //     $("body").trigger("resize");
                //     $("#main-wrapper").addClass("mini-sidebar");
                // })
            });

        });
        
        this.setUser();
    }

    setUser() {
        this.user = this.authService.getUser();
    }

    ngAfterViewInit(){

        $(function () {
            $('.collapse').on('click', function () {
                if($(this).hasClass('in')) {
                    $("body").trigger("resize");
                    $("#main-wrapper").addClass("mini-sidebar");
                }
            })
        })
    }
    
}
