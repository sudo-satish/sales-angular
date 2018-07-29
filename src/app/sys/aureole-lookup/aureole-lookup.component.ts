import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from './smart-data-table';
import { HttpClient } from '@angular/common/http';
import { ChttpService } from '../../shared/services/chttp.service';

@Component({
  selector: 'app-aureole-lookup',
  templateUrl: './aureole-lookup.component.html',
  styleUrls: ['./aureole-lookup.component.css']
})
export class AureoleLookupComponent implements OnInit {

  constructor( 
    private http: HttpClient,
    private chttp: ChttpService
  ) { }

  formTitle: String = 'Aureole Lookup';
  formSubtitle: String = 'Aureole Lookup Sub Heading';
  
  data;
  source: LocalDataSource;
  settings = tableData.settings;

  ngOnInit() {

    this.setData();
  }

  setData() {
    this.chttp.get('/api/sys/aureole-lookup')
      .subscribe((resp: any) => {
        console.log(' Res => ', resp);
        this.source = new LocalDataSource(resp);
      }, err => {
        console.log(' Error in getting Lookup');
      })
  }

  onCreateConfirm($event) {

    this.chttp
      .post('/api/sys/aureole-lookup', $event.newData)
      .subscribe(response => {
        $event.confirm.resolve();
      }, err => {
        console.log(' 1 Error => ', err);
        
      })
  }

  onEditConfirm($event) {
    
    let url = `/api/sys/aureole-lookup/${$event.newData.id}`;
    this.chttp.put(url, $event.newData)
      .subscribe(response => {
        $event.confirm.resolve();
      }, err => {
        console.log(' 2 Error => ', err);
      })
  }

  onDeleteConfirm($event) {
    console.log($event);
    let url = `/api/sys/aureole-lookup/${$event.data.id}`;
    this.chttp.delete(url).subscribe(response => {
      $event.confirm.resolve();
    }, err => {
      console.log(' 3 Error => ', err);
    })
  }
}
