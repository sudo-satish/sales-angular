import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { Subscription } from '../../../../../node_modules/rxjs';
import { debounceTime } from '../../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {

  constructor(
    private _alert: AlertService
  ) { }
  
  staticAlertClosed;
  alertSB1 : Subscription;
  alertSB2 : Subscription;
  alert;
  
  changeSuccessMessage() {
    this._alert.changeMessage({type:'success', message:' Hellow'});
  }

  ngOnInit() {
    this.alertSB1 = this._alert.getMessage().subscribe(alert => {
      console.log(' Message ', alert);
       this.alert = alert;

       console.log(this.alert);
       
    })

    this.alertSB2 = this._alert.getMessage().pipe(debounceTime(5000)).subscribe(() => {
      this.alert = null;
      console.log(' After 5 sec ');
    });
  }

  ngOnDestroy() {
    console.log(' MEssage Destroy');
    
    this.alertSB1.unsubscribe();
    this.alertSB2.unsubscribe();
  }

}
