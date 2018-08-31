import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HrmRoutes } from './hrm.routing';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ClientComponent } from './client/client.component';
import { UserComponent } from './user/user.component';
import { ClientAddressComponent } from './client-address/client-address.component';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';

// import { TumbrowComponent } from './tumbrow/tumbrow.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HrmRoutes),
    FormsModule,
    // ReactiveFormsModule,
    JsonpModule,
    NgbModule,
    NgxDatatableModule,
    // Ng2SmartTableModule, 
    // NgxDatatableModule
  ],
  declarations: [
    ClientComponent,
    ClientAddressComponent,
    UserComponent,
    PricingPlanComponent
  ]
})

export class HrmModule {}