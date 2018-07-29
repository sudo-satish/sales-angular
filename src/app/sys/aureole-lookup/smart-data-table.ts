
export var settings = {
    columns: {
        id: {
            title: 'ID',
            editable:false,
            filter: false,
            filterFunction : ($event) => {
                console.log(' Id Event => ', $event);
            }

        },
        translation_type: {
            title: 'Translation Type',
            filter: true,
            filterFunction: ($event) => {
                console.log(' Translation Type => ', $event);
            },
            // valuePrepareFunction : ($event) => {
            //     console.log(' Value prepre Translation => ', $event);
            //     return ' Append- '+$event;
            // }
        },
        code: {
            title: 'CODE',
            filter: true,
        },
        meaning: {
            title: 'Meaning',
            filter: true,
        },
        tip: {
            title: 'Tip',
            filter: true,
        },
        order: {
            title: 'Order',
            filter: true,
        },
        active: {
            title: 'Active',
            filter: true,
        },
        description: {
            title: 'Description',
            filter: true,
        },
    },
    add: {
        confirmCreate: true
    },
    edit: {
        confirmSave: true,
        editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
        saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
        cancelButtonContent: '<i class="ti-close text-danger"></i>',
    },
    delete: {
        confirmDelete : true,
        deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
        saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
        cancelButtonContent: '<i class="ti-close text-danger"></i>',
    },
    pager : {
            display: true
    },
    mode: "inline",
};
