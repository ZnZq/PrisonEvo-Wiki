webix.ui([{
    type: "header",
    template: 'Общее - Лаки блок',
}, {
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
                <li>Кейс рун</li>
                <li>Золотой орех</li>
                <li>Летучая мышь</li>
                <li>Рандомный блок</li>
                <li>Эффект Спешка</li>
                <li>Эффект Скорость</li>
                <li>Эффект Свечение</li>
                <li>Эффект Усталость</li>
                <li>Эффект Замедление</li>
                <li>Эффект Регенерации</li>
                <li>Бустер денег на 15 минут</li>
                <li>Бустер шардов на 15 минут</li>
                <li>Доступ к приватной шахте на время</li>
                <li>Доступ к шахте следующего уровня на время</li>
            </ul>
        </div>
    `
}], $$('body'));