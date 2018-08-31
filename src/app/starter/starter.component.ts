import { Component, AfterViewInit } from '@angular/core';
@Component({
	templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit {
	subtitle:string;	
	constructor() {
		this.subtitle = "Welcome to sales module."
	}

	ngAfterViewInit(){}
}