import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '../../shared/services/alert.service';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ValueTransformer } from '@angular/compiler/src/util';
import { UtComponent } from '../../shared/components/resource-component/ut-component/UtComponent';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

const my = new Date();

@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.css']
})

export class PricingPlanComponent extends UtComponent implements OnInit {
  formSubtitle = `My New Form Subtitle`;
  formTitle = `My new Form Title`;
  resourceDescription = `Resource Description`;
  resourceName = `Resource Name`;
  resourceURL = `/api/hrm/pricing-plan`;

  formData = { id: '', item_name: '', gsm: '', default_price: '', actual_price: '', unit: ''};

  clientId;
  constructor(
    public http: HttpClient,
    public router: Router,
    public route: ActivatedRoute,
    public toastr: ToastrService
  ) {
    super(http, toastr);
  }

  init() {
    super.init();

    this.selectToday();

    this.route.params.subscribe(params => { 
      this.clientId = params.clientId;
      this.fetchAllData();
     }, this.responseErrorHandler.bind(this))
  }

  fetchAllData() {
    let url = this.resourceURL;
    url += `/get-client-plan/${this.clientId}`;

    this.http.get(url).subscribe(this.manageGridData.bind(this), this.responseErrorHandler.bind(this))

  }

  addressRows;

  afterSave(response) {
    this.fetchAllData();
  }
  afterUpdate(response) {
    this.fetchAllData();
  }

  model: NgbDateStruct;

  selectToday() {
    this.model = { year: my.getFullYear(), month: my.getMonth() + 1, day: my.getDate() };
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
