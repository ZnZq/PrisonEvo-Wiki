function template(obj) {
    return `
        <div class="tool-level">
            <img class="icon" src="icon/${obj.icon}.png" alt="${obj.icon}">
            <h4 class="name">${obj.name}</h4>
            <span class="price">Цена: ${obj.price} $</span>
        </div>
    `;
}

webix.ui([{
    view: "tabview",
    cells: [
        {
            header: "Уровень",
            body: {
                view: 'dataview',
                select: true,
                datatype: "json",
                url: "data/player_levels.json",
                type: {
                    width: 250,
                    height: 64,
                    type: "tiles"
                },
                template: function (obj) {
                    return `
                        <div class="player-level">
                            <h3>${obj.level} Уровень</h3>
                            <div class="info">
                                <span>Цена: ${obj.money} $</span>
                                <span>Блоков: ${obj.blocks}</span>
                            </div>
                        </div>
                    `;
                },
            }
        },
        {
            header: "Кирка",
            body: {
                view: 'dataview',
                select: true,
                datatype: "json",
                url: "data/pickaxe_levels.json",
                type: {
                    width: 250,
                    height: 64,
                    type: "tiles"
                },
                template: template,
            }
        },
        {
            header: "Меч",
            body: {
                view: 'dataview',
                select: true,
                datatype: "json",
                url: "data/sword_levels.json",
                type: {
                    width: 250,
                    height: 64,
                    type: "tiles"
                },
                template: template,
            }
        },
        {
            header: "Броня",
            body: {
                view: 'dataview',
                select: true,
                datatype: "json",
                url: "data/armor_levels.json",
                type: {
                    width: 250,
                    height: 64,
                    type: "tiles"
                },
                template: template,
            }
        }
    ]
}], $$('body'));