import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StockRoutes } from './stock.routing';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { TumbrowComponent } from './tumbrow/tumbrow.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(StockRoutes),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule,
    Ng2SmartTableModule, 
    NgxDatatableModule
  ],
  declarations: [
    TumbrowComponent
  ]
})

export class StockModule {}