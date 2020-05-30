webix.ui([{
    type: "header",
    template: 'Прокачка - Уровень',
}, {
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
}], $$('body'));