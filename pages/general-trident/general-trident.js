webix.ui([{
    type: "header",
    template: 'Общее - Трезубец',
}, {
    autoheight: true,
    template: `
        <div class="luck-block">
            <img class="icon" src="icon/minecraft__trident__{Damage__0}.png" alt="Трезубец"
                style="width: 32px; height: 32px;padding: 8px; border: 1px solid #DADEE0;">
            <h3 class="name" style="display: inline">Трезубец</h3>
        </div>
        <div style="margin: 0; margin-bottom: 8px">
            Что бы получить Трезубец нужно активировать руну \"Посейдон\"
        </div>
    `
}], $$('body'));