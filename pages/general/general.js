webix.ui([{
        type: "header",
        template: 'Бустер за копание',
    },
    {
        autoheight: true,
        template: `
            Бустер х1.1 - 1к блоков<br>
            Бустер х1.5 - 10к блоков<br>
            Бустер х2.0 - 100к блоков<br><br>
            Бустер спадёт, если не копать в течении 30 секунд
        `
    },
    {
        type: "header",
        template: 'Лаки блок',
    },
    {
        autoheight: true,
        template: `
            <div class="luck-block">
                <img class="icon" src="icon/minecraft__sponge.png" alt="Губка"
                    style="width: 32px; height: 32px;padding: 8px; border: 1px solid #DADEE0;">
                <h3 class="name" style="display: inline">Лаки блок</h3>
            </div>
            <div style="margin: 0; margin-bottom: 8px">
                Из лаки блока вы можете получить следующее:
                <ul style="margin: 0;">
                    <li>Белка</li>
                    <li>Шарды</li>
                    <li>Смерть</li>
                    <li>Деньги</li>
                    <li>Летучая мышь</li>
                    <li>Эффект свечения</li>
                    <li>Скорость копания</li>
                    <li>Эффект регенерации</li>
                    <li>Бустер денег на 15 минут</li>
                    <li>Доступ к шахте следующего уровня</li>
                </ul>
            </div>
        `
    }
], $$('body'));