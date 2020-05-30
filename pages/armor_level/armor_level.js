webix.ui([{
    view: 'dataview',
    select: true,
    datatype: "json",
    url: "data/armor_levels.json",
    type: {
        width: 250,
        height: 64,
        type: "tiles"
    },
    template: function (obj) {
        return `
            <div class="tool-level">
                <img class="icon" src="icon/${obj.icon}.png" alt="${obj.icon}">
                <h4 class="name">${obj.name}</h4>
                <span class="price">Цена: ${obj.price} $</span>
            </div>
        `;
    },
}], $$('body'));