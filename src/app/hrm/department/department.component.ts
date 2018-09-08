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
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})

export class DepartmentComponent extends UtComponent implements OnInit {
  formTitle = `Department`;
  formSubtitle = `Manage Departments here`;
  resourceDescription = `Resource Description`;
  resourceName = `Resource Name`;
  resourceURL = `/api/hrm/department`;

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
