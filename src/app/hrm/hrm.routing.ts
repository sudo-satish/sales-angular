import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { UserComponent } from './user/user.component';
import { ClientAddressComponent } from './client-address/client-address.component';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';
import { LocationComponent } from './location/location.component';
import { DepartmentComponent } from './department/department.component';
import { DesignationComponent } from './designation/designation.component';
import { ClientFullComponent } from './client-full/client-full.component';


export const HrmRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'client',
        component: ClientComponent,
      data: {
        title: 'Client',
        urls: [{title: 'Dashboard', url: '/dashboard'}, {title: 'Progressbar'}]
      }
    },
    {
      path: 'client-full',
        component: ClientFullComponent,
      data: {
        title: 'Client Full',
        urls: [{title: 'Client Full', url: '/client-full'}, {title: 'Progressbar'}]
      }
    },
    {
      path: 'user',
        component: UserComponent,
      data: {
        title: 'User',
        urls: [{title: 'Dashboard', url: '/dashboard'}, {title: 'Progressbar'}]
      }
    }, 
    {
      path: 'client-address/:clientId',
      component: ClientAddressComponent,
      data: {
        title: 'Client Address',
        urls: [{title: 'Dashboard', url: '/dashboard'}, {title: 'Progressbar'}]
      }
    }, 
    {
      path: 'pricing-plan/:clientId',
      component: PricingPlanComponent,
      data: {
        title: 'Pricing Plan',
        urls: [{title: 'Dashboard', url: '/dashboard'}, {title: 'Progressbar'}]
      }
    },
    {
      path: 'location',
      component: LocationComponent,
      data: {
        title: 'Location',
        urls: [{title: 'Hrm', url: '/location'}]
      }
    },
    {
      path: 'department',
      component: DepartmentComponent,
      data: {
        title: 'department',
        urls: [{ title: 'Hrm', url: '/department'}]
      }
    },
    {
      path: 'designation',
      component: DesignationComponent,
      data: {
        title: 'designation',
        urls: [{ title: 'Hrm', url: '/designation'}]
      }
    },
   
    ]
  }
];
