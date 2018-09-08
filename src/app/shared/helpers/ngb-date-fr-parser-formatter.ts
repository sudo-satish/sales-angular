import { Injectable } from "@angular/core";
import { NgbDateParserFormatter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import * as moment from "moment";

function padNumber(value: number) {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    } else {
        return "";
    }
}

function isNumber(value: any): boolean {
    return !isNaN(toInteger(value));
}

function toInteger(value: any): number {
    return parseInt(`${value}`, 10);
}


@Injectable()
export class NgbDateFRParserFormatter extends NgbDateParserFormatter {
    parse(value: string): NgbDateStruct {
        // if (value) {
        //     const dateParts = value.trim().split('/');
        //     if (dateParts.length === 1 && isNumber(dateParts[0])) {
        //         return { year: toInteger(dateParts[0]), month: null, day: null };
        //     } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        //         return { year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null };
        //     } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        //         return { year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0]) };
        //     }
        // }
        // return null;
        
        let dateObj = moment(value, "YYYY-MM-DD");
        return  { 
            year : toInteger(dateObj.format('YYYY')),
            month: toInteger(dateObj.format('MM')),
            day: toInteger(dateObj.format('DD'))
        };
    }

    format(date: NgbDateStruct): string {
        if(date) {
            return moment(date.year + "-" + date.month + "-" + date.day, "YYYY-MM-DD").format('YYYY-MM-DD');
        } else {
            return '';
        }
        // let stringDate: string = "";
        // if (date) {
        //     stringDate += isNumber(date.day) ? padNumber(date.day) + "/" : "";
        //     stringDate += isNumber(date.month) ? padNumber(date.month) + "/" : "";
        //     stringDate += date.year;
        // }
        // return stringDate;
    }
}