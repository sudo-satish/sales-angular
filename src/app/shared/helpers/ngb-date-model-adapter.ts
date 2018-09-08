import { Injectable } from "@angular/core";
import { NgbDateAdapter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import * as moment from "moment";

function toInteger(value: any): number {
    return parseInt(`${value}`, 10);
}

@Injectable()
export class NgbDateModelAdapter extends NgbDateAdapter<String> {

    fromModel(value): NgbDateStruct {
        let dateObj = moment(value, "YYYY-MM-DD");
        return {
            year: toInteger(dateObj.format('YYYY')),
            month: toInteger(dateObj.format('MM')),
            day: toInteger(dateObj.format('DD'))
        };
        // return {year: 2018, month:12, day: 09};
    }

    toModel(date: NgbDateStruct): String{
        if (date) {
            return moment(date.year + "-" + date.month + "-" + date.day, "YYYY-MM-DD").format('YYYY-MM-DD');
        } else {
            return '';
        }
        // return '';
    }

    // parse(value: string): NgbDateStruct {
    // }

    // format(date: NgbDateStruct): string {
    // }
}