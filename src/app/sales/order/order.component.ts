import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { AlertService } from '../../shared/services/alert.service';
import { FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// import { ValueTransformer } from '@angular/compiler/src/util';
import { UtComponent } from '../../shared/components/resource-component/ut-component/UtComponent';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { OrderService } from '../services/order.service';
// import { Observable, of } from 'rxjs';

// import { tap, map, switchMap, distinctUntilChanged, debounceTime, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent extends UtComponent implements OnInit {
  formSubtitle = `My New Form Subtitle`;
  formTitle = `My new Form Title`;
  resourceDescription = `Resource Description`;
  resourceName = `Resource Name`;
  resourceURL = `/api/hrm/client`;
  formMode = 'NEW';
  formData = {type: 'Sale Order', order_no: 'ORDER-1'};
  fakeFormData = { id: null, client_name: 'Fake', head_office_address: 'Hrayana fake', pan: '2121454', gst: '54sdfdsf', billto_client_id: '', active: 'Y', credit_limit: '5000', balance: '25' };
  
  itemFormObj = { item_name: '', description: '', bf: '', width: '', length: '', unit: '', grain: '', gsm: '', fixel_pack: '', weight: '', sec_unit: '', wieght_sku: '', rate: '', amount: '', ch: ''};

  searching = false;
  searchFailed = false;
  
  items;

  @ViewChildren('itemForm') itemForm: QueryList<NgForm>;

  formatter = (x) => x.client_name;
  inputFormatter = (x) => x.client_name;

  constructor(
    public http: HttpClient,
    public router: Router,
    public toastr: ToastrService,
    public _order: OrderService
  ) {
    super(http, toastr);
  }

  cloneItem(index) {
    let item = this.items[index];
    // debugger;
    this.items.push({...item});
  }
  deleteItem(index) {
    this.items.splice(index, 1);
    // debugger;
    // this.items.push({...item});
  }

  ngOnInit() {
    this._order.pricingPlan$.subscribe(pricingPlan => {
      this.items = pricingPlan;
    })
  }

  playSave(form) {
    console.log(form);
    console.log(this.itemForm);
    
    debugger;
    
  }

  search3 = (text3$: Observable<string>) => {
    console.log(this._order);
    return text3$.pipe(
      debounceTime(200),
      map(term => {
        if(term === '') {
          return [];          
        } else {
          if (this._order && this._order.clients) {
            return this._order.clients.filter(v => v.client_name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
          } else {
            return [];
          }
        }
      })
    );
  }
}
