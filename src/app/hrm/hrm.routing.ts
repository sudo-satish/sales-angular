import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { UserComponent } from './user/user.component';
import { ClientAddressComponent } from './client-address/client-address.component';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';


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
   
    ]
  }
];
