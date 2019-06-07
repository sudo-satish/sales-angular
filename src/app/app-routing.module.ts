import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { AuthGuard } from './authentication/auth-guard.service';

export const Approutes: Routes = [
{
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
        { path: '', redirectTo: '/starter', pathMatch: 'full' },
        { path: 'starter', loadChildren: './starter/starter.module#StarterModule' },
        { path: 'component', loadChildren: './component/component.module#ComponentsModule' },
        { path: 'charts', loadChildren: './charts/charts.module#ChartModule' },
        { path: 'stock', loadChildren: './stock/stock.module#StockModule' },
        { path: 'sys', loadChildren: './sys/sys.module#SysModule' },
        { path: 'hrm', loadChildren: './hrm/hrm.module#HrmModule' },
        { path: 'sales', loadChildren: './sales/sales.module#SalesModule' },
    ]
},
{
    path: '',
    component: BlankComponent,
    children: [
        {
            path: 'authentication',
            loadChildren: './authentication/authentication.module#AuthenticationModule'
        },
        
    ]
}, 
{
    path: '**',
    redirectTo: '/authentication/404' 
},
{
    path: '**',
    redirectTo: '/starter' 
}];


