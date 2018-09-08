import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';

import { FullComponent } from './layouts/full/full.component';

import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { NgbModule, NgbDateParserFormatter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { AuthInterceptor } from './authentication/auth.interceptor';
import { ResourceComponentComponent } from './shared/components/resource-component/resource-component.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { ToastrModule } from 'ngx-toastr';
// import { UtComponentComponent } from './shared/components/resource-component/ut-component/ut-comoponent.component';
import { NgbDateFRParserFormatter } from "./shared/helpers/ngb-date-fr-parser-formatter";
import { NgbDateModelAdapter } from './shared/helpers/ngb-date-model-adapter';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    BreadcrumbComponent,
    SidebarComponent,
    BlankComponent,
    ResourceComponentComponent,
    AlertComponent,
    // UtComponentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    
    BrowserAnimationsModule,   
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    RouterModule.forRoot(Approutes, { useHash: false }),  
    PerfectScrollbarModule
  ],
  providers: [
    
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter },
    { provide: NgbDateAdapter, useClass: NgbDateModelAdapter },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
