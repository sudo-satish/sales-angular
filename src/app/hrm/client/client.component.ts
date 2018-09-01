import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '../../shared/services/alert.service';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ValueTransformer } from '@angular/compiler/src/util';
import { UtComponent } from '../../shared/components/resource-component/ut-component/UtComponent';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent extends UtComponent implements OnInit {
  formSubtitle = `My New Form Subtitle`;
  formTitle = `My new Form Title`;
  resourceDescription = `Resource Description`;
  resourceName = `Resource Name`;
  resourceURL = `/api/hrm/client`;

  formData = {id: '', client_name:'', head_office_address: '', pan: '', gst: '', billto_client_id:'', active: 'Y', credit_limit: '', balance: '' };
  fakeFormData = { id: null, client_name: 'Fake', head_office_address: 'Hrayana fake', pan: '2121454', gst: '54sdfdsf', billto_client_id: '', active: 'Y', credit_limit: '5000', balance: '25' };
  
  constructor(
    public http: HttpClient,
    public router: Router,
    public toastr: ToastrService
  ) {
    super(http, toastr);
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
