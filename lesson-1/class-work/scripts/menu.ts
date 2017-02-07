/**
 * Created by artemgalas on 07.02.17.
 */

// Простенький виджет для создания меню

// Определили тип для объекта нашего меню
type menuList = {title: string, items: string[]}[];
// Объявили переменную нашего типа
let menuList: menuList = [
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
function generateMenu(list: menuList):string {
  // создаем строчный литерал;
  let str: string = `<ul>`;

  // пробегаемся по первому уровню нашего листа и добавляем в список пункты
  for(let menu of list) {
    str += `<li><a class="title">${menu.title}</a>`;
    str += `<ul>`;

    for(let item of menu.items) {
     str += `<li><a>${item}</a></li>`;
    }
    str += `</ul></li>`;
  }
  str += `</ul>`;

  return str;
}

// Находим наш navMenuList и говорим компилятору что это тип HTMLElement (document.querySelector возвращает елемент)
let navMenuList: HTMLElement = document.querySelector('.menu') as HTMLElement;
// вызываем функцию для генирации нашего меню
navMenuList.innerHTML = generateMenu(menuList);

// Вызов функции с другим типом - приведет к ошибке;
// navMenuList.innerHTML = generateMenu(menLisErr);

// добавляем клик функцию для нашего меню
navMenuList.onclick = (e: MouseEvent) => {
  let el = e.target as HTMLElement;
  let classList = el.classList;
  if(classList.contains('title')) {
    let parentLi = el.parentNode as HTMLElement;
    parentLi.classList.toggle('menu-open');
  }
};