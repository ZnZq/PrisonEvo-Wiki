webix.ui([{
    type: "header",
    template: 'Руны - Библиотека',
}, {
    template: `
        <div>
            <span>Цена продажи рун за шарды</span>
            <ul style="margin:0;padding-left:16px;">
                <li>Уровень I - 3 шарда</li>
                <li>Уровень II - 6 шарда</li>
                <li>Уровень III - 9 шарда</li>

                <li>Лег. Уровень I - 6 шарда</li>
            </ul><br>
            <span>Соединение рун</span>
            <ul style="margin: 0; padding-left: 16px">
                <li>2 Руны - 20% шанс успеха</li>
                <li>3 Руны - 30% шанс успеха</li>
                <li>4 Руны - 40% шанс успеха</li>
                <li>5 Руны - 50% шанс успеха</li>
            </ul>
        </div>
    `
}], $$('body'));