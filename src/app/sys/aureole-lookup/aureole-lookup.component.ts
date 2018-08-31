import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from './smart-data-table';
import { HttpClient } from '@angular/common/http';
import { ChttpService } from '../../shared/services/chttp.service';
import { environment } from '../../../environments/environment';

declare var $:any;

@Component({
  selector: 'app-aureole-lookup',
  templateUrl: './aureole-lookup.component.html',
  styleUrls: ['./aureole-lookup.component.css']
})
export class AureoleLookupComponent implements OnInit, AfterViewInit {

  constructor( 
    // private http: HttpClient,
    // private chttp: ChttpService
  ) { }

  formTitle: String = 'Aureole Lookup';
  formSubtitle: String = 'Aureole Lookup Sub Heading';
  
  data;
  source: LocalDataSource;
  settings = tableData.settings;

  ngOnInit() {

    this.setData();
  }

  ngAfterViewInit() {
    $('.ng2-smart-actions-title-add').attr('colspan', '2');
    $('.ng2-smart-filters > .ng2-smart-th.id').remove()
  }

  setData() {

    // let url = 
    let token = localStorage.getItem('token');
    // let getHeaders: HttpHeaders = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Bearer ' + token
    // });

    let url = environment.url + '/api/sys/aureole-lookup';

    $.ajax({
            url,
            method:'get',
            dataType:'JSON',

            success: (response) => {
              this.source = new LocalDataSource(response);
            },
            // failure: function(response) {

            // }
          })

    // this.chttp.get('/api/sys/aureole-lookup')
    //   .subscribe((resp: any) => {
    //     console.log(' Res => ', resp);
    //     this.source = new LocalDataSource(resp);
    //   }, err => {
    //     console.log(' Error in getting Lookup');
    //   })
  }

  onCreateConfirm($event) {

    let url = environment.url + '/api/sys/aureole-lookup';
    let data = $event.newData;

    $.ajax({
      url,
      data,
      method:'post',
      dataType:'JSON',
      success: (response) => {
        $event.confirm.resolve();
      }
    })
    // this.chttp
    //   .post('/api/sys/aureole-lookup', $event.newData)
    //   .subscribe(response => {
    //     $event.confirm.resolve();
    //   }, err => {
    //     console.log(' 1 Error => ', err);
        
    //   })
  }

  onEditConfirm($event) {
    
    let url = environment.url + `/api/sys/aureole-lookup/${$event.newData.id}`;

    $.ajax({
      url,
      method: 'PUT',
      data: $event.newData,
      dataType: 'json',
      success: (response) => {
        $event.confirm.resolve();
      }
    })
    // this.chttp.put(url, $event.newData)
    //   .subscribe(response => {
    //     $event.confirm.resolve();
    //   }, err => {
    //     console.log(' 2 Error => ', err);
    //   })
  }

  onDeleteConfirm($event) {
    let url = environment.url + `/api/sys/aureole-lookup/${$event.data.id}`;

    $.ajax({
      url,
      method:'delete',
      dataType:'json',
      success: (response) => {
        $event.confirm.resolve();
      } 
    })
    // this.chttp.delete(url).subscribe(response => {
    //   $event.confirm.resolve();
    // }, err => {
    //   console.log(' 3 Error => ', err);
    // })
  }
}
