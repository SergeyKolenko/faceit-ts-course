/**
 * Created by artemgalas on 07.02.17.
 */
// Объявили переменную нашего типа
var menuList = [
    {
        title: 'Животные',
        items: ['Кошки', 'Собаки']
    },
    {
        title: 'Рыбы',
        items: ['Акула', 'Окунь']
    }
];
// Тип для вызова ошибки во время компиляции
// type menuListErr = {title: string, items: number[]}
// let menLisErr: menuListErr = { title: 'a', items: [1]};
// GenerageMenu function - принимает list заданого типа, возвращает строку
function generateMenu(list) {
    // создаем строчный литерал;
    var str = "<ul>";
    // пробегаемся по первому уровню нашего листа и добавляем в список пункты
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var menu = list_1[_i];
        str += "<li><a class=\"title\">" + menu.title + "</a>";
        str += "<ul>";
        for (var _a = 0, _b = menu.items; _a < _b.length; _a++) {
            var item = _b[_a];
            str += "<li><a>" + item + "</a></li>";
        }
        str += "</ul></li>";
    }
    str += "</ul>";
    return str;
}
// Находим наш navMenuList и говорим компилятору что это тип HTMLElement (document.querySelector возвращает елемент)
var navMenuList = document.querySelector('.menu');
// вызываем функцию для генирации нашего меню
navMenuList.innerHTML = generateMenu(menuList);
// Вызов функции с другим типом - приведет к ошибке;
// navMenuList.innerHTML = generateMenu(menLisErr);
// добавляем клик функцию для нашего меню
navMenuList.onclick = function (e) {
    var el = e.target;
    var classList = el.classList;
    if (classList.contains('title')) {
        var parentLi = el.parentNode;
        parentLi.classList.toggle('menu-open');
    }
};
//# sourceMappingURL=menu.js.map