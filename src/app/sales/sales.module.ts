import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SalesRoutes } from './sales.routing';
import { OrderComponent } from './order/order.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(SalesRoutes),
        FormsModule,
        NgbModule,
    ],
    declarations: [
        OrderComponent,
    ]
})

export class SalesModule { }