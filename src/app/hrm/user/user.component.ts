import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '../../shared/services/alert.service';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ValueTransformer } from '@angular/compiler/src/util';
import { UtComponent } from '../../shared/components/resource-component/ut-component/UtComponent';

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

  formData = { id: '', name: '', email: '', employee_code: '', email_official: '', designation_id: '', location_id: '', department_id: '', roles_id: '' };

  // saveForm(form) {
  //   console.log(' Save Form');
  //   console.log(form);
    
  //   let values = form.value;
  //   let url = this.resourceURL;

  //   // this.http.post(url, values).subscribe(this.logResponse.bind(this), this.responseErrorHandler)
  // }

}
