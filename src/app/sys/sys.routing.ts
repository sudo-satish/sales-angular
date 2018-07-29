import { Routes } from '@angular/router';
import { AureoleLookupComponent } from './aureole-lookup/aureole-lookup.component';


export const sysRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'aureole-lookup',
                component: AureoleLookupComponent,
                data: {
                    title: 'Aureole Lookup',
                    urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Progressbar' }]
                }
            },

        ]
    }
];
