webix.ajax('data/runes.json', function (text) {
    let json = JSON.parse(text);

    let data = [];

    json['common'].forEach(obj => {
        data.push({
            title: obj.names[0],
            upgrade: obj.names.length - 1,
            rarity: 'Обычная',
            data: obj
        });
    });
    json['legendary'].forEach(obj => {
        data.push({
            title: obj.names[0],
            upgrade: obj.names.length - 1,
            rarity: 'Легендарная',
            data: obj
        });
    });
    json['shaft'].forEach(obj => {
        data.push({
            title: obj.names[0],
            upgrade: obj.names.length - 1,
            rarity: 'Шахтёрская',
            data: obj
        });
    });

    webix.ui([{
        type: "header",
        template: 'Руны',
    }, {
        template: "<span style='color: #F44336'>Руны нельзя передавать другим игрокам! Можно только кейсы!</span>",
        autoheight: true,
    }, {
        view: 'datatable',
        id: 'datatable',
        columns: [{
                id: 'title',
                header: 'Название',
                sort: "string",
                fillspace: true
            },
            {
                id: 'rarity',
                header: 'Редкость',
                sort: "string",
                width: 125
            },
            {
                id: 'upgrade',
                header: 'Улучшений',
                sort: "int",
                width: 125
            },
        ],
        on: {
            onAfterSelect: function (selection) {
                $$('datatable').openSub(selection.id);
            },
            onAfterUnSelect: function (selection) {
                $$('datatable').closeSub(selection.id);
            }
        },
        subrow: obj => {
            let props = [];

            obj.data.props.forEach(propData => {
                let prop = `${propData[0]}: `;
                let values = [];
                for (let i = 1; i < propData.length; i++) {
                    let value = propData[i];
                    if (value != "")
                        values.push(`<span style="color: ${(value[0] == "-" ? '#F44336' : '#4CAF50')}">${value}</span>`);
                }
                props.push(`${prop}${values.join(' / ')}`);
            });

            props.push(`Необходимый уровень: ${obj.data.levels.join(' / ')}`);

            return `<div style="text-align:left;padding-left:24px;">${props.join('<br>')}</div>`;
        },
        select: "row",
        subRowHeight: "auto",
        data: data,
    }], $$('body'));
});