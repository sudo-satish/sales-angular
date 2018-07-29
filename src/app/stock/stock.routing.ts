import { Routes } from '@angular/router';
import { TumbrowComponent } from './tumbrow/tumbrow.component';


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
   
    ]
  }
];
