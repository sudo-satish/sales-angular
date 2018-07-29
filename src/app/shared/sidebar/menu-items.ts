import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '', title: 'Personal', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
    {
        path: '/starter', title: 'Starter Page', icon: 'mdi mdi-gauge', class: '', label: '', labelClass: '', extralink: false, submenu: []
    },

    // {
    //     path: '', title: 'UI Components', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    // },{
    //     path: '', title: 'Component', icon: 'mdi mdi-bullseye', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    //     submenu: [
    //         { path: '/component/accordion', title: 'Accordion', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //         { path: '/component/alert', title: 'Alert', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //         { path: '/component/carousel', title: 'Carousel', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //         { path: '/component/dropdown', title: 'Dropdown', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //         { path: '/component/modal', title: 'Modal', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //         { path: '/component/pagination', title: 'Pagination', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //         { path: '/component/poptool', title: 'Popover & Tooltip', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //         { path: '/component/progressbar', title: 'Progressbar', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //         { path: '/component/rating', title: 'Ratings', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //         { path: '/component/tabs', title: 'Tabs', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //         { path: '/component/timepicker', title: 'Timepicker', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //         { path: '/component/buttons', title: 'Button', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //         { path: '/component/cards', title: 'Card', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //         { path: '/charts/chartjs', title: 'Chart', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //     ]
    // },

    {
        path: '', title: 'Stock', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    }, {
        path: '', title: 'Stock', icon: 'mdi mdi-bullseye', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/stock/tumbrow', title: 'Tumbrow', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    
    {
        path: '', title: 'sys', icon: 'mdi mdi-bullseye', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/sys/aureole-lookup', title: 'Lookup', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },

    {
        path: '', title: 'Menu Levels', icon: 'mdi mdi-arrange-send-backward', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: 'javascript:void(0);', title: 'Second Level', icon: '', class: '', label: '', labelClass: '', extralink: true, submenu: [] },
            {
                path: '', title: 'Second Child', icon: '', class: 'has-arrow', label: '', labelClass: '', extralink: false,
                submenu: [
                    { path: 'javascript:void(0);', title: 'Third 1.1', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                    { path: 'javascript:void(0);', title: 'Third 1.2', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
                ]
            },
        ]
    }
     
];

