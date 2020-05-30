webix.ajax('data/slang.json', function (text) {
    let json = JSON.parse(text);

    webix.ui([{
        type: "header",
        template: 'Сленг',
    }, {
        view: 'datatable',
        columns: [{
                id: 'slang',
                header: 'Слово',
                sort: "string",
            },
            {
                id: 'desc',
                header: 'Описание',
                sort: "string",
                fillspace: true
            }
        ],
        select: "row",
        data: json
    }], $$('body'));
});