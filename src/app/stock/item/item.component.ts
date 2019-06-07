import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UtComponent } from '../../shared/components/resource-component/ut-component/UtComponent';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import * as _ from "lodash";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent extends UtComponent implements OnInit {
  formSubtitle = `My New Form Subtitle`;
  formTitle = `My new Form Title`;
  resourceDescription = `Resource Description`;
  resourceName = `Resource Name`;
  resourceURL = `/api/stock/item`;
  formMode = 'NEW';

  formData = {gst: '5'};
  fakeFormData = { };
  
  itemFormObj = { };

  @ViewChild('form') form: NgForm;

  constructor(
    public http: HttpClient,
    public router: Router,
    public toastr: ToastrService,
  ) {
    super(http, toastr);
  }

  populateFields($event, form: NgForm) {
    let itemName = $event.target.value;
    // form.controls['item_code'].setValue('itemName');

    let url = this.resourceURL +'/get-item-code';

    this.http.post(url, { item_name: itemName}, {responseType: 'text'}).subscribe(
      itemCode => {
        form.controls['item_code'].setValue(itemCode);
      },
      this.responseErrorHandler.bind(this)
    );
  }

  selectBF(bf) {
    console.log(bf.value);
  }


  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  selectedBF = [];
  selectedGSM = [];

  ngOnInit() {

    super.ngOnInit();
    this.selectedBF = [
    ];
    this.selectedGSM = [
    ];

    this.dropdownSettings = {
      text: "Select",
      primaryKey: "code",
      labelKey: "meaning",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class"
    };
  }

  saveForm(form) {
    console.log(' Save Form');

    let values = this.getSaveValue(form);
    let url = this.getSaveUrl(); /* this.resourceURL; */

    this.http.post(url, values).subscribe((response) => {
      this.afterSave(response);

      this.savePriceMap(form, response);
      if (response && response['message']) {
        this.toastr.success(response['message'], '');
      } else {
        this.toastr.success('Saved Successfully', '');
      }

      this.logResponse(response);
    }, this.responseErrorHandler.bind(this))
  }

  savePriceMap(form: NgForm, response) {
    let values = this.getPriceMapValue(form);
    values.forEach(i => i.item_id = response['id']);
    let url = `/api/stock/price-mapping`;
    console.log(values);

    this.http.post(url, values).subscribe((response) => {
      // this.afterSave(response);

      // this.savePriceMap(form);
      if (response && response['message']) {
        this.toastr.success(response['message'], '');
      } else {
        this.toastr.success('Saved Successfully', '');
      }

      this.logResponse(response);
    }, this.responseErrorHandler.bind(this))
  }
  getSaveValue(form: NgForm) {
    let itemMap = [];
    let formValue = _.cloneDeep(form.value);
    for (const key in formValue) {
      if (formValue.hasOwnProperty(key)) {
        const value = formValue[key];
        if (key == 'bf' || key == 'gsm') {
          formValue[key] = formValue[key].map(i => i.code).join(',');
        }

        let price = key.split('$');
        if(price[0] && price[0] == 'price') {
          itemMap.push({ bf: price[2], gsm: price[1], price: value});
          delete formValue[key];
        }
      }
    }
    return formValue;
  }

  getPriceMapValue(form: NgForm) {
    let itemMap = [];
    let formValue = _.cloneDeep(form.value);
    for (const key in formValue) {
      if (formValue.hasOwnProperty(key)) {
        const value = formValue[key];
        if (key == 'bf' || key == 'gsm') {
          formValue[key] = formValue[key].map(i => i.code).join(',');
        }

        let price = key.split('$');
        if(price[0] && price[0] == 'price') {
          itemMap.push({ bf: price[2], gsm: price[1], price: value});
          delete formValue[key];
        }
      }
    }
    return itemMap;
  }

  onItemSelect(item: any) {
    console.log(item);
    // this.selectedItems.push(item);
    console.log(this.selectedItems);
  }

  OnItemDeSelectGSM(item: any) {
    console.log(item);
    let itemId = this.form.value.id;
    if(!itemId) {
      return;
    }

    let confirmed = confirm('Are you sure want to delete '+item.meaning+'!');
    if(confirmed) {
      alert(`Delete GSM => ${item.code} from server  for itemId => ${itemId}if any`);
      
      let url = `/api/stock/item/${itemId}/gsm/${item.code}`;
      this.http.delete(url).subscribe(
          response => {
            if (response && response['message']) {
              this.toastr.success(response['message'], '');
            }
          }
      )
    }
  }

  OnItemDeSelectBF(item: any) {
    console.log(item);
    let itemId = this.form.value.id;
    if(!itemId) {
      return;
    }

    let confirmed = confirm('Are you sure want to delete '+item.meaning+'!');
    if(confirmed) {
      let url = `/api/stock/item/${itemId}/bf/${item.code}`;
      this.http.delete(url).subscribe(
          response => {
            if (response && response['message']) {
              this.toastr.success(response['message'], '');
            }
          }
      )
    }
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }

  populateForm(form, values) {

    _.forEach(values, (value, key) => {

      if (key == 'bf') {
        setTimeout(() => {
          // this.selectedBF = value;
          form.controls[key].setValue(value);
          console.log('bf => ', key, form.controls[key]);
        }, 50);
      }

      if (key == 'gsm') {
        setTimeout(() => {
          this.selectedGSM = value;
          form.controls[key].setValue(value);
        }, 100);
      }

      if (key == 'price_mapping') {
        setTimeout(() => {
          // this.selectedGSM = value;
          this.populatePriceMapping(form, value);
          // form.controls[key].setValue(value);
        }, 100);
      }

      if (form.controls[key]) {
        form.controls[key].setValue(value);
        
      } else {
        console.log(' Input not found => ', key);
      }
    })
  }

  populatePriceMapping(form, priceMap) {
    // price${{gsm.code}}${{bf.code}}
    for (const key in priceMap) {
      if (priceMap.hasOwnProperty(key)) {
        const value = priceMap[key];
        let name = `price$${value.gsm}$${value.bf}`;
        form.controls[name].setValue(value.price);
        $(`#${value.gsm}${value.bf}`).attr('price-map-id', value.id);
      }
    }
  }

}
