import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '../../shared/services/alert.service';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ValueTransformer } from '@angular/compiler/src/util';
import { UtComponent } from '../../shared/components/resource-component/ut-component/UtComponent';
import { ToastrService } from 'ngx-toastr';
import { Authentication } from '../../authentication/authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends UtComponent implements OnInit {
  formSubtitle = `My New Form Subtitle`;
  formTitle = `My new Form Title`;
  resourceDescription = `Resource Description`;
  resourceName = `Resource Name`;
  resourceURL = `/api/hrm/user`;

  formData = { id: '', client_id:'', name: 'Satish', email: '', employee_code: '', email_official: '', designation_id: '', location_id: '', department_id: '', roles_id: '' };

  constructor(
    public http: HttpClient,
    public toastr: ToastrService,
    public _auth: Authentication
    // private toastr: ToastrService
  ) { 
    super(http, toastr);
    this.formData.client_id = _auth.getUser().client_id;
  }
}
