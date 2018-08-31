import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '../../shared/services/alert.service';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ValueTransformer } from '@angular/compiler/src/util';
import { UtComponent } from '../../shared/components/resource-component/ut-component/UtComponent';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-client-address',
  templateUrl: './client-address.component.html',
  styleUrls: ['./client-address.component.css']
})

export class ClientAddressComponent extends UtComponent implements OnInit {
  formSubtitle = `My New Form Subtitle`;
  formTitle = `My new Form Title`;
  resourceDescription = `Resource Description`;
  resourceName = `Resource Name`;
  resourceURL = `/api/hrm/client-address`;

  formData = { id: '', address_line_one: '', address_line_two: '', city_id: '', state_id: '', pincode: '', type: '', active: 'Y' };

  clientId;
  constructor(
    public http: HttpClient,
    public router: Router,
    public route: ActivatedRoute
  ) {
    super(http);
  }

  init() {
    super.init();
    this.route.params.subscribe(params => { 
      this.clientId = params.clientId;
      this.fetchAllData();
     }, this.responseErrorHandler.bind(this))
  }

  fetchAllData() {
    let url = this.resourceURL;
    url += `/get-client-address/${this.clientId}`;

    this.http.get(url).subscribe(this.manageGridData.bind(this), this.responseErrorHandler.bind(this))

  }

  addressRows;

  afterSave(response) {
    this.fetchAllData();
  }
  afterUpdate(response) {
    this.fetchAllData();
  }

  getAddressGridData() {
    // this.rows.forEach()
    this.addressRows = _.chunk(this.rows, 2);

    console.log("this.addressRows", this.addressRows);
    
  }

  afterManageGridData(response) {
    this.getAddressGridData();
  }

  getCityName(cityId) {
    return this.getMeaningFromCode(this.lov.citys, cityId);
  }

  

}
