import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AureoleLookupComponent } from './aureole-lookup/aureole-lookup.component';
import { RouterModule } from '@angular/router';
import { sysRoutes } from './sys.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    RouterModule.forChild(sysRoutes),
  ],
  exports: [
  ],
  declarations: [AureoleLookupComponent]
})
export class SysModule { }
