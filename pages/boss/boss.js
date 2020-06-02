webix.ajax('data/bosses.json', function (text) {
    let json = JSON.parse(text);

    webix.ui([{
        type: "header",
        template: 'Боссы',
    },{
        template: "<span>Награды почти не зависят от того, сколько человек убивало босса, зависят от нанесённого вами урона. <br>Деньги, шарды и лут отдельно считаются для каждого игрока, а не делятся между всеми. <br>Предметы попадают сразу вам в инвентарь</span>",
        autoheight: true,
    }, {
        view: 'list',
        template: function (obj) {
            return `
                <div class="boss">
                    <h4 class="name">${obj.name}</h4>
                    <span class="level">Уровень: ${obj.level}, <span class="pvp">ПВП: ${(obj.pvp ? 'Да' : 'Нет')}</span></span>
                    <span class="hp">Жизни: ${obj.hp}, <span class="timeout">Откат: ${obj.timeout}</span></span>
                    <span class="raid">Рейдовый босс: ${(obj.raid ? 'Да' : 'Нет')}</span>
                    ${(obj.description ? `<span class="desc">${obj.description}</span>` : '')}
                </div>
            `;
        },
        type: {
            height: "auto",
        },
        data: json
    }], $$('body'));
});