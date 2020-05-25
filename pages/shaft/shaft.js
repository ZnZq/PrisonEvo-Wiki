webix.ajax('data/shafts.json', function (text) {
    let json = JSON.parse(text);

    // let data = [];

    webix.ui([{
        view: 'dataview',
        select: true,
        type: {
            width: 250,
            height: 64,
            type: "tiles"
        },
        template: function (obj) {
            return `
            <div class="shaft">
                <img class="icon" src="icon/${obj.icon}.png" alt="${obj.icon}" style="width: 32px;">
                <span class="name">${obj.name}</span>
                <span class="level">Уровень: ${obj.level}; ${(obj.pvp ? 'PVP' : 'PVE')}</span>
            </div>
            `;
        },
        tooltip: function (obj) {
            let blocks = [];
            for (let i = 0; i < obj.blocks.length; i++) {
                let block = obj.blocks[i];
                blocks.push(`
                    <div class="block">
                        <img class="icon" src="icon/${block.icon}.png" alt="${block.icon}" style="width: 32px;" title="${block.name}">
                        <span>${block.name} ${block.price} $</span>
                    </div>
                `);
            }
            return `
                <div class="blocks">
                    ${blocks.join('')}
                </div>
            `;
        },
        data: json
    }], $$('body'));

});