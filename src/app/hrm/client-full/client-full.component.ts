import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '../../shared/services/alert.service';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ValueTransformer } from '@angular/compiler/src/util';
import { UtComponent } from '../../shared/components/resource-component/ut-component/UtComponent';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';

import { tap, map, switchMap, distinctUntilChanged, debounceTime, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-client-full',
  templateUrl: './client-full.component.html',
  styleUrls: ['./client-full.component.css']
})

export class ClientFullComponent extends UtComponent implements OnInit {
  formSubtitle = `My New Form Subtitle`;
  formTitle = `My new Form Title`;
  resourceDescription = `Resource Description`;
  resourceName = `Resource Name`;
  resourceURL = `/api/hrm/client`;
  formMode = 'SEARCH';
  formData = {id: '', client_name:'', head_office_address: '', pan: '', gst: '', billto_client_id:'', active: 'Y', credit_limit: '', balance: '' };
  fakeFormData = { id: null, client_name: 'Fake', head_office_address: 'Hrayana fake', pan: '2121454', gst: '54sdfdsf', billto_client_id: '', active: 'Y', credit_limit: '5000', balance: '25' };
  
  searching = false;
  searchFailed = false;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      // map(term => term.length < 2 ? []
      //   : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));
      tap(() => this.searching = true),
      switchMap(term =>
        this.searchClient(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
        );
  
  formatter = (x) => x.client_name;
  inputFormatter = (x) => x.client_name;

  searchClient(term) {
    console.log(term);
    // return ['satish', 'gupta'];
    let url = this.resourceURL +'/search-client';
    url += '?searchTxt=' + term;

    return this.http.get(url);
    // return of(['satish','Gupta']);
  }

  // saveForm(form) {
  //   this.preSave(form);
  //   console.log(form.value);
    
  // }

  // updateForm(form) {
  //   console.log(form.value);
  //   return true;
  // }


  constructor(
    public http: HttpClient,
    public router: Router,
    public toastr: ToastrService
  ) {
    super(http, toastr);
  }

  init() {

    super.init();
    this.onSearch();
  }


  getBillTo($event) {

      
    console.log($event.target.value);
    
  }

  manageAddress(clientId) {
    this.router.navigate(['hrm/client-address', clientId]);
  }

  managePrice(clientId) {
    this.router.navigate(['hrm/pricing-plan', clientId]);
  }

  getAddress(clientId) {

    let url = `/api/hrm/client-address/get-client-address/${clientId}`;

    this.http
      .get(url)
      .subscribe(this.logResponse.bind(this), this.responseErrorHandler.bind(this))
  }

}
