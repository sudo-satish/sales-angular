import { Routes } from '@angular/router';
import { TumbrowComponent } from './tumbrow/tumbrow.component';
import { ItemComponent } from './item/item.component';


export const StockRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'tumbrow',
      component: TumbrowComponent,
      data: {
        title: 'Tumbrow',
        urls: [{title: 'Dashboard', url: '/dashboard'}, {title: 'Progressbar'}]
      }
    }, 
    {
      path: 'item',
      component: ItemComponent,
      data: {
        title: 'Item',
        urls: [{title: 'Dashboard', url: '/dashboard'}]
      }
    }, 
   
    ]
  }
];
