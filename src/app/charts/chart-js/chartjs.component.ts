import { Component, AfterViewInit } from '@angular/core';

@Component({
	templateUrl: './chartjs.component.html'
})
export class ChartjsComponent implements AfterViewInit {
	subtitle:string;
    
    
	constructor() {
		this.subtitle = "This is chart page."
    }
    
    //This is line chart
    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        barThickness : 10
    };
     
    public barChartLabels: string[] = [
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017'
    ];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Iphone 8' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Iphone X' }
    ];
    public barChartColors: Array<any> = [
        {backgroundColor: '#55ce63'},
        {backgroundColor: '#009efb'}
    ];
    // Doughnut
    public doughnutChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail-Order Sales'
    ];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string = 'doughnut';
   
    // Radar
    public radarChartLabels: string[] = [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
    ];
    public radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    public radarChartType: string = 'radar';
    public radarChartColors: Array<any> = [
        {backgroundColor: 'rgba(0,158,251,0.5)', borderColor: 'rgba(0,158,251,1)'},
        {backgroundColor: 'rgba(85,206,99,0.5)', borderColor: 'rgba(85,206,99,1)'}
    ];
    // Pie
    public pieChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales'
    ];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string = 'pie';

    // PolarArea
    public polarAreaChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales',
        'Telesales',
        'Corporate Sales'
    ];
    public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
    public polarAreaLegend: boolean = true;

    public polarAreaChartType: string = 'polarArea';

    // lineChart
    public lineChartData: Array<any> = [
        { data: [65, 39, 80, 15, 76, 35, 40], label: 'Series A' },
        { data: [18, 58, 20, 69, 16, 27, 90], label: 'Series B' }
    ];
    public lineChartLabels: Array<any> = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(0,158,251,0.1)',
            borderColor: '#009efb',
            pointBackgroundColor: '#009efb',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#009efb'
        },
        {
            // dark grey
            backgroundColor: 'rgba(85,206,99,0.1)',
            borderColor: '#55ce63',
            pointBackgroundColor: '#55ce63',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#55ce63'
        }
        
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        const data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.random() * 100,
            56,
            Math.random() * 100,
            40
        ];
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }


	ngAfterViewInit(){}
}

