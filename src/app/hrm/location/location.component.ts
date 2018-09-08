import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '../../shared/services/alert.service';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ValueTransformer } from '@angular/compiler/src/util';
import { UtComponent } from '../../shared/components/resource-component/ut-component/UtComponent';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})

export class LocationComponent extends UtComponent implements OnInit {
  formTitle = `Location`;
  formSubtitle = `Manage Locations here`;
  resourceDescription = `Resource Description`;
  resourceName = `Resource Name`;
  resourceURL = `/api/hrm/location`;

  formData = { id: '', name: '', active: 'Y', order: ''};

  clientId;
  constructor(
    public http: HttpClient,
    public router: Router,
    public route: ActivatedRoute,
    public toastr: ToastrService
  ) {
    super(http, toastr);
  }

}
