webix.ajax('data/slang.json', function (text) {
    let json = JSON.parse(text);

    webix.ui([{
        type: "header",
        template: 'Сленг',
    }, {
        view: 'datatable',
        fixedRowHeight: false,
        rowLineHeight: 30,
        rowHeight: 30,
        columns: [{
                id: 'slang',
                header: 'Слово',
                sort: "string",
                width: 175,
            },
            {
                id: 'desc',
                header: 'Описание',
                sort: "string",
                fillspace: true
            }
        ],
        on: {
            "onresize": webix.once(function () {
                this.adjustRowHeight("desc", true);
                this.adjustRowHeight("slang", true);
            })
        },
        select: "row",
        data: json
    }], $$('body'));
});