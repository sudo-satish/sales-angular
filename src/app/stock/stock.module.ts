import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StockRoutes } from './stock.routing';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { Ng2SmartTableModule } from 'ng2-smart-table';

import { TumbrowComponent } from './tumbrow/tumbrow.component';
import { ItemComponent } from './item/item.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(StockRoutes),
    AngularMultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule,
    NgxDatatableModule,
  ],
  declarations: [
    TumbrowComponent,
    ItemComponent
  ]
})

export class StockModule {}