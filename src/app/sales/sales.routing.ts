import { Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';


export const SalesRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'sales-order',
                component: OrderComponent,
                data: {
                    title: 'Order',
                    urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Sales Order' }]
                }
            },
        ]
    }
];
