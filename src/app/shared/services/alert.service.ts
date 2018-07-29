import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  private _message = new Subject<{type: string, message: string}>();

  public changeMessage(message: { type: string, message: string }) {
    this._message.next(message);
    this._message.pipe(debounceTime(5000))
  }

  public getMessage() {
    return this._message;
  }
}

export interface IAlert {
  type: string;
  message: string;
}
