/**
 * Created by artemgalas on 07.02.17.
 */

// Деструктуризация объектная
let rect = {x: 0, y:0, width: 12, height: 12 };
let {x, y, width, height} = rect;
//Деструктуризация массивов
let a = [1, 2, 3, 4];
let [q, w, e, r] = a;

// Rest параметры - неопределенное количество параметров
function rest(...a) {
 console.log(a); //Будут Array из [1,2,3]
}
rest(1,2,3);

// String literal
let say = `a bird > two cat`;
let html = htmlEscape `<div>Hello ${say}</div>`;

// literals - то что до вызова ${} ('<div>Hello', '</div>'),
// placeholders - то что в нутри ${} (наша фраза из say)
// Таким образом прежде чем вставить какуе-то строку
// в string literal мы можем что-то с ней сделать, например,
// удалить не валидные символы
function htmlEscape(literals, ...placeholders) {
  let res = ``;

  for(let i = 0; i < placeholders.length; i++) {
    res += literals[i];
    res += placeholders[i]
      .replace('>', '&gt;');
  }

  res += literals[literals.length - 1];

  return res
}

console.log(html); //<div>Hello a bird &gt; two cat</div>

// Enum - доступен как по ключу так и по индексу
enum Color {
   red,
   green,
   white
 }

console.log(Color[0]); // Значение - red
console.log(Color['red']); // Индекс


// Создаем переменную str и
// 'прокидываем' ее в значение в область определения типов, через typeof
// то есть b = типу str - string
let str: string = 'Artem';
let b:typeof str;

// Это конструкции которые доступны только
// в Области определения типов и также никак
// не компилируются в js, кроме class - (смотри фаил 1.js)
class Foo{};
interface Bar{}
type baz = {};

// Интерфейсы - используються для определния типов
interface Animation {
 delayX: number;
 delayY: number;
 ease: 'ease-in' | 'ease-out' // или 'ease-in' или 'ease-out' любой другой вызовет ошибку
}

let animation: Animation;
// animation.ease = 'ease'; // ошибка!
// animation.ease = 'ease-in'; // нет ошибки

// Наследование Interfaces
// объект типа MoverShaker будет иметь методы из Mover and Shaker
interface Mover {
  move(): void;
  getStatus: () => {speed: number};
}

interface Shaker {
  shake(): void;
  getStatus: () => {freg: string}
}

interface MoverShaker extends Mover, Shaker {
  getStatus:() => {speed: number, freg: string}
}

// Расширяемые Interfaces
// Вы можете создать один интерфейс A,
// а потом где-то в своей программе его рассширить,
// и у объекта типа A будут два свойства name, id
interface A {
  name: string
}
interface A {
  id: number;
}
let iA: A = {id:1, name: 'Artem'}; // правильно;
// let iA1: A = {id:1 }; // не правильно - ошибка что iA1 не соответвует типу A;

// readonly porperty
interface B {
  readonly x: number;
  readonly a: number;
}
let iB: B = {x: 1, a: 3};
// iB.x = 3; // ошибка - мы не можем присвоить свойству readonly что-то после инициализации

// Generic type <T> (вместо T может быть любмая буква в документациях обычно T) -
// тип в который мы можем пердать любой тип :)
// Обобщеный тип - котоыр будет определен позже
function reverse<T>(list: T[]): T[] {
  let reverseList: T[] = [];
  for(let i = list.length-1; i >= 0; i--) {
    reverseList.push(list[i]);
  }
  return reverseList;
}

let words = ['hi', 'foo', 'bar', 'baz'];
let reverseWord = reverse<string>(words); //передали тип <string> значит в функции у нас везде бдуте string

// Generic Alias
type someType<T,D> = {a: T, b:D};
let genericAlias:someType<boolean, string>; // мы передали тип в alias - type, теперь a - boolean, b - string
// genericAlias.a = 3 // ошибка - так как a - boolean

// Ограничение - минмум ДВА типа
interface Int<T extends {id: number, name: string}>{
  z: T
}
let intB: Int<{id: number, name: string, payPall: number}>; // передали три - все хорошо, передадим какой-то один - ошибка


// interface IA {
//   a: string;
//   b: number;
// }
//
// interface IB {
//   a: number;
//   b: number;
//   c: number;
// }
//
// // объединение типов
// let IAIBx: IA|IB;
//
// // пересечение типов
// let IAIBy: IA&IB = {a: 'String', b: 1, c: 3};


// Локальная декларация типов - interface A существует только в области if{}
function n(a) {
  if(a) {
    interface A {
      a: string;
    }
    let v: A;
    v.a = 'A'
  } else {
    interface A {
      a: number;
    }

    let v: A;
    v.a = 1;
  }
}
