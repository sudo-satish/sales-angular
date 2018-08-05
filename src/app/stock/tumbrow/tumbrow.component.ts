import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from './smart-data-table';
import { AlertService } from '../../shared/services/alert.service';
import { formArrayNameProvider } from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_name';
import { FormGroup } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-tumbrow',
  templateUrl: './tumbrow.component.html',
  styleUrls: ['./tumbrow.component.css']
})

export class TumbrowComponent implements OnInit {

  formMode; // SEARCH, EDIT, NEW
  formTitle; // title of form
  formSubtitle; // SEARCH, EDIT, NEW
  resourceName;
  resourceDescription;
  @ViewChild('form') form : FormGroup;
  // formData: any;

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };

  formData = { s_no: '', roll_no: '', gsm: '', bf: '', no_reels: '', size: '', pm: '', weight:'', date:'', operator:'', shift:''};
  

  source2: LocalDataSource;
  settings2 = tableData.settings2; 

  constructor(
    private _alert: AlertService
  ) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.formMode = 'EDIT';
    this.formTitle = 'Tumbrow';
    this.formSubtitle = 'Form subtitle';

    this.source2 = new LocalDataSource(tableData.data); // create the source
    this.resourceName = 'Tumbrow';
    this.resourceDescription = 'Tumbrow Search';
  }

  submit(heroForm) {
    console.log(heroForm);
    console.log(heroForm.value);
    this._alert.changeMessage({type:'success', message:'Saved'})
  }

  onEdit(edit) {
    console.log(' Edit => ', edit);
    this.formMode="EDIT"
  }

  onDelete(deleted) {
    console.log('delete => ', deleted);
    
  }

  onNew($event) {
    console.log($event);
    this.formMode="EDIT"
  }

  onEditConfirm($event) {
    console.log(' Edit confirm => ', $event);
  }

  onCreateConfirm($event) {
    $event.confirm.resolve();
    console.log( ' Create confirm => ' , $event);
    
  }

  onDeleteConfirm($event) {
    console.log(' Delete => ', $event);
    
  }

}
