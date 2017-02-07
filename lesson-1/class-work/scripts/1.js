/**
 * Created by artemgalas on 07.02.17.
 */
// Деструктуризация объектная
var rect = { x: 0, y: 0, width: 12, height: 12 };
var x = rect.x, y = rect.y, width = rect.width, height = rect.height;
//Деструктуризация массивов
var a = [1, 2, 3, 4];
var q = a[0], w = a[1], e = a[2], r = a[3];
// Rest параметры - неопределенное количество параметров
function rest() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i - 0] = arguments[_i];
    }
    console.log(a); //Будут Array из [1,2,3]
}
rest(1, 2, 3);
// String literal
var say = "a bird > two cat";
var html = (_a = ["<div>Hello ", "</div>"], _a.raw = ["<div>Hello ", "</div>"], htmlEscape(_a, say));
// literals - то что до вызова ${} ('<div>Hello', '</div>'),
// placeholders - то что в нутри ${} (наша фраза из say)
// Таким образом прежде чем вставить какуе-то строку
// в string literal мы можем что-то с ней сделать, например,
// удалить не валидные символы
function htmlEscape(literals) {
    var placeholders = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        placeholders[_i - 1] = arguments[_i];
    }
    var res = "";
    for (var i = 0; i < placeholders.length; i++) {
        res += literals[i];
        res += placeholders[i]
            .replace('>', '&gt;');
    }
    res += literals[literals.length - 1];
    return res;
}
console.log(html); //<div>Hello a bird &gt; two cat</div>
// Enum - доступен как по ключу так и по индексу
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["white"] = 2] = "white";
})(Color || (Color = {}));
console.log(Color[0]); // Значение - red
console.log(Color['red']); // Индекс
// Создаем переменную str и
// 'прокидываем' ее в значение в область определения типов, через typeof
// то есть b = типу str - string
var str = 'Artem';
var b;
// Это конструкции которые доступны только
// в Области определения типов и также никак
// не компилируются в js, кроме class - (смотри фаил 1.js)
var Foo = (function () {
    function Foo() {
    }
    return Foo;
}());
;
var animation;
var iA = { id: 1, name: 'Artem' }; // правильно;
var iB = { x: 1, a: 3 };
// iB.x = 3; // ошибка - мы не можем присвоить свойству readonly что-то после инициализации
// Generic type <T> (вместо T может быть любмая буква в документациях обычно T) -
// тип в который мы можем пердать любой тип :)
// Обобщеный тип - котоыр будет определен позже
function reverse(list) {
    var reverseList = [];
    for (var i = list.length - 1; i >= 0; i--) {
        reverseList.push(list[i]);
    }
    return reverseList;
}
var words = ['hi', 'foo', 'bar', 'baz'];
var reverseWord = reverse(words); //передали тип <string> значит в функции у нас везде бдуте string
var genericAlias; // мы передали тип в alias - type, теперь a - boolean, b - string
var intB; // передали три - все хорошо, передадим какой-то один - ошибка
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
    if (a) {
        var v = void 0;
        v.a = 'A';
    }
    else {
        var v = void 0;
        v.a = 1;
    }
}
var _a;
//# sourceMappingURL=1.js.map