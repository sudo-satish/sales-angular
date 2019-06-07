import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { of, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  resource = '/api/sales/order';
  
  public clients;
  public lov: any;
  public pricingPlan;
  public pricingPlan$: Subject<any[]> = new Subject<any[]>();

  constructor(
    public http: HttpClient,
    public _toastr: ToastrService
  ) {
    this.setLov();
    this.setClients();
    this.setPricingPlan();
   }

   setPricingPlan() {
     let url = this.getPricingPlanUrl();
     
     this.http.get(url).subscribe(
       response => {
         this.pricingPlan = response;
         this.pricingPlan$.next(this.pricingPlan);
       },
       this.defaultErrorHanlder.bind(this)
     )
   }

   getPricingPlan(): Observable<any> {
    return this.pricingPlan$;
   }

   setLov() {
     let url = this.getLovUrl();
     this.http.get(url).subscribe(
       response => {
         this.lov = response;
       },
       this.defaultErrorHanlder.bind(this)
     )
   }

   setClients() {
    let url = this.getClientsUrl();

     this.http.get(url).subscribe(
       response => {
         this.clients = response;
       },
       this.defaultErrorHanlder.bind(this)
     )
   }

  getLovUrl() {
    return this.resource+'/get-lov';
  }

  getPricingPlanUrl() {
    return '/api/hrm/pricing-plan';
  }

  getClientsUrl() {
    //  return this.resource+'/get-clients';
     return '/api/hrm/client';
   }

  defaultErrorHanlder(error) {
    this._toastr.error('Something went wrong.');
    console.log(error);
  }
}
