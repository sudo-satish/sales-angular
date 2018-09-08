import { HttpClient } from "@angular/common/http";
import * as _ from 'lodash';
// import { Component, Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { environment } from "../../../../../environments/environment";

var data: any;
// @Injectable({
//     providedIn: 'root',
//     i
// })
export abstract class UtComponent {
    formMode; // SEARCH, EDIT, NEW
    abstract formTitle; // title of form
    abstract formSubtitle; // SEARCH, EDIT, NEW
    abstract resourceName;
    displayActions = true;
    abstract resourceDescription;
    abstract resourceURL = `/api/hrm/client`;
    lov;

    environment = environment;
    hideFakeBtn = environment.production;

    serverErrors; // Servers errors for Fields.
    
    abstract formData = { };
    fakeFormData = { }; // same as formData but to fill the fake data in form for faster development. 
    
    constructor(
        public http: HttpClient,
        public toastr: ToastrService
    ) { 
    }

    ngOnInit() {
        this.init();
    }

    init() {
        
        this.formMode = this.formMode || 'NEW';
        // this.formMode = 'SEARCH';

        this.formTitle = 'Tumbrow';
        this.formSubtitle = 'Form subtitle';

        this.resourceName = 'Tumbrow';
        this.resourceDescription = 'Tumbrow Search';
        this.fetchLOV();
    }

    fetchLOV() {
        let url = this.resourceURL;
        let action = `/get-lov`;
        url = url + action;
        this.http.get(url).subscribe(response => { this.lov = response}, this.lovErrorHandler.bind(this))
    }

    lovErrorHandler(error) {
        console.log(error);
    }

    onFake(form) {

        console.log(form);

        // let formData = { id: null, client_name: 'Fake', head_office_address: 'Hrayana fake', pan: '2121454', gst: '54sdfdsf', billto_client_id: '', active: 'Y', credit_limit: '5000', balance: '25' };
        let formData = this.fakeFormData;
        _.forEach(formData, (value, key) => {
            form.controls[key].setValue(value);
        })
    }

    logResponse(response) {
        console.log(response);
    }

    submit(form) {

        if (form.value.id && form.value.id !== '') {
            this.updateForm(form);
        } else {
            this.saveForm(form);
        }
    }

    updateForm(form) {

        let values = form.value;
        let url = this.resourceURL;

        if (form.value.id && form.value.id !== '') {

            let id = form.value.id;
            url += `/${id}`;

        } else {
            return false;
        }


        this.http.put(url, values).subscribe(response => {
            this.afterUpdate(response);
            if (response && response['message']) {
                this.toastr.success(response['message'], '');
            } else {
                this.toastr.success('Updated Successfully', '');
            }
            this.logResponse(response);
        }, this.responseErrorHandler.bind(this))
    }

    saveForm(form) {
        console.log(' Save Form');

        let values = form.value;
        let url = this.resourceURL;

        this.http.post(url, values).subscribe((response) => { 
            this.afterSave(response);
            
            if (response && response['message']) {
                this.toastr.success(response['message'], '');
            } else {
                this.toastr.success('Saved Successfully', '');
            }

            this.logResponse(response);
        }, this.responseErrorHandler.bind(this))
    }

    afterUpdate(response) {

    }
    afterSave(response) {

    }

    onEdit($event, rowIndex, form) {
        this.formMode = "EDIT";
        let values = this.rows[rowIndex];
        this.populateForm(form, values);
    }

    populateForm(form, values) {
        _.forEach(values, (value, key) => {
            if (form.controls[key]) {
                form.controls[key].setValue(value);
            } else {
                console.log(' Input not found => ', key);
            }
        })
    }

    onDelete(deleted) {
        console.log('delete => ', deleted);

    }

    onNew($event, form) {
        this.formMode = "NEW";
        form.reset();
    }

    // onEditConfirm($event) {
    //     console.log(' Edit confirm => ', $event);
    // }

    // onCreateConfirm($event) {
    //     $event.confirm.resolve();
    //     console.log(' Create confirm => ', $event);
    // }

    // onDeleteConfirm($event) {
    //     console.log(' Delete => ', $event);
    // }

    onSearch() {
        this.formMode = 'SEARCH';
        this.fetchAllData();
    }

    fetchAllData() {
        let url = this.resourceURL;
        this.http.get(url).subscribe(this.manageGridData.bind(this), this.responseErrorHandler.bind(this))
    }

    responseErrorHandler(error) {
        console.log(error);

        if(error && error.error && error.error.message) {
            this.toastr.error('Invalid Form', 'Oops!');
        }

        if (error.error && error.error.errors) {
            console.log(error.error.errors);
            this.serverErrors = error.error.errors;
        }
    }

    manageGridData(response) {

        data = response;
        this.rows = data;
        this.temp = [...data];

        this.afterManageGridData(response);
    }

    afterManageGridData(response) {

    }

    // =============== Search Starts from here ======

    editing = {};
    rows = [];
    temp = [];

    updateValue(event, cell, rowIndex) {
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];

        // Logic to update the row...
        console.log('UPDATED!', this.rows[rowIndex][cell]);
    }


    /**
     * list = [{code: 1, meaning: 'One'}, {code: 2, meaning: 'Two'}];
     * meaning = getMeaningFromCode(list, 2);
     * // meaning = "Two" OR ""(if not found)
     * 
     */
    getMeaningFromCode(list, code) {

        if (code) {
            try {
                let cityName = _.find(list, { code: code })['meaning'];

                if (cityName) {
                    return cityName;
                } else {
                    return code;
                }

            } catch (error) {
                return code;
            }

        } else {
            return code;
        }
    }

    startCase(word) {
        return _.startCase(word);
    }
}