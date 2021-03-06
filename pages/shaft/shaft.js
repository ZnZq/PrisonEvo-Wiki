webix.ajax('data/shafts.json', function (text) {
    let json = JSON.parse(text);

    webix.ui([{
        type: "header",
        template: 'Шахты',
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
                <div class="shaft">
                    <img class="icon" src="icon/${obj.icon}.png" alt="${obj.icon}" style="width:32px;height:32px;">
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
                        <img class="icon" src="icon/${block.icon}.png" alt="${block.icon}" style="width:32px;height:32px;" title="${block.name}">
                        <span>${block.name} ${block.price} ${(isNaN(Number.parseInt(block.price[0])) ? '' : '$')}</span>
                    </div>
                `);
            }
            if (obj.description) {
                blocks.push(`<span style="padding:10px">${obj.description}</span>`);
            }
            return `
                <div class="blocks">
                    ${blocks.join('')}
                </div>
            `;
        },
        on: {
            onItemClick: function (id) {
                let obj = this.getItem(id);
                let blocks = [];
                for (let i = 0; i < obj.blocks.length; i++) {
                    let block = obj.blocks[i];
                    blocks.push(`
                        <div class="block">
                            <img class="icon" src="icon/${block.icon}.png" alt="${block.icon}" style="width:32px;height:32px;" title="${block.name}">
                            <span>${block.name} ${block.price} ${(isNaN(Number.parseInt(block.price[0])) ? '' : '$')}</span>
                        </div>
                    `);
                }
                if (obj.description) {
                    blocks.push(`<span style="padding:10px">${obj.description}</span>`);
                }

                for (let obj in webix.message.pull) {
                    webix.message.hide(obj)
                }

                webix.message({
                    text: `
                        <h3 style="margin:0;text-align:center;">${obj.name}</h3>
                        <div class="blocks">
                            ${blocks.join('')}
                        </div>
                    `,
                    expire: 6000
                });
            }
        },
        data: json
    }], $$('body'));

});