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
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})

export class DesignationComponent extends UtComponent implements OnInit {
  formTitle = `Designation`;
  formSubtitle = `Manage designations here`;
  resourceDescription = `Resource Description`;
  resourceName = `Resource Name`;
  resourceURL = `/api/hrm/designation`;

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
