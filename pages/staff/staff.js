webix.ajax('data/staffs.json', function (text) {
    let json = JSON.parse(text);

    webix.ui([{
        view: 'list',
        template: function (obj) {
            let prices = [];

            for (let level in obj.price) {
                prices.push(`<span>Уровень ${level} - ${obj.price[level]} шардов</span>`);
            }

            return `
                <div class="staff">
                    <img class="icon" src="icon/${obj.icon}.png" alt="${obj.icon}" style="width:48px;height:48px;">
                    <span class="name">${obj.name}</span>
                    <span class="desc">${obj.descripion}</span>
                    <div class="info">
                        <span>Перезарядка: ${obj.cooldown}</span>
                        ${(prices.length > 0 ? '<br>' + prices.join('<br>') : '')}
                    </div>
                </div>
            `;
        },
        type: {
            height: "auto",
        },
        data: json
    }], $$('body'));
});