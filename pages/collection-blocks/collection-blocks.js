webix.ajax('data/collection-blocks.json', function (text) {
    let json = JSON.parse(text);

    webix.ui([{
        type: "header",
        template: 'Коллекция - Блоки',
    }, {
        template: "<span style='color: #F44336'>Коллекционные предметы нельзя передавать другим игрокам!</span>",
        autoheight: true,
    }, {
        view: 'dataview',
        select: true,
        type: {
            width: 250,
            height: 64,
            type: "tiles"
        },
        template: function (obj) {
            return `
                <div class="collection-block">
                    <img class="icon" src="icon/${obj.icon}.png" alt="${obj.icon}" style="width:32px;height:32px;">
                    <span class="name">${obj.name}</span>
                    <span class="shaft">${obj.getting}</span>
                </div>
            `;
        },
        data: json
    }], $$('body'));
});