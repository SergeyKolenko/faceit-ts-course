/**
 * Обычная функция с типизироваными входящими и исходящими значениями
 */
// function getAverage(a: number, b: number, c: number) : string {
//   let total = a + b + c;
//   let average = total / 3;
//
//   return `The average is ${average}`;
// }
//
// console.log(getAverage(2,3,5));
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Таже функция но с необязательным параметром */
// function getAverage(a: number, b: number, c?: number) : string {
//   if(typeof c === 'undefined') {
//     c = 0;
//   }
//
//   let total = a + b + c;
//   let average = total / 3;
//
//   return `The average is ${average}`;
// }
//
// console.log(getAverage(2,3));
/** Таже функция с параметром по умолчанию */
// function getAverage(a: number, b: number, c = 0) : string {
//   let total = a + b + c;
//   let average = total / 3;
//
//   return `The average is ${average}`;
// }
//
// console.log(getAverage(2,3));
/** Таже функция с неопределенным количеством параметров REST */
// function getAverage(...a: number[]) : string {
//   console.log(a);
//
//
//   let total = 0;
//   let count = 0;
//
//   for(let i = 0; i < a.length; i++) {
//     total += a[i];
//     count ++
//   }
//
//   let average = total/count;
//   return `The average is ${average}`;
// }
//
// console.log(getAverage(2,3, 3, 5,5,6,7,7,8,9,0,1,1));
/** Стандартная перегрузка функций */
// function getAverage(a: string, b: string, c:string) : string;
// function getAverage(a: number, b: number, c:number) : string;
// function getAverage(a:any, b:any, c:any): string {
//   let total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
//   let average = total/3;
//   return `The average is ${average}`;
// }
/** Специальная перегрузка функций */
// function getAverage(a: string, b: string, c:string) : string;
// function getAverage(a: number, b: number, c:number) : string;
// function getAverage(a: any, b: any, c:any): string; // обязательно описываеться над сигнатура!!
// function getAverage(a:any, b:any, c:any): string {
//   let total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
//   let average = total/3;
//   return `The average is ${average}`;
// }
/** Классы */
// class Account {
/** Можно определять так */
/** свойства */
//   // firstName: string;
//   // lastName: string;
//   //
//   // constructor(firstName: string, lastName:string) {
//   //   this.firstName = firstName;
//   //   this.lastName = lastName;
//   // }
//
/** Или так (меннее читабольно но короче) */
//   constructor(public firstName: string, public lastName:string){}
/** методы */
//  // Public доступны везде (у наследников, экземпляров)
//   public getName():string {
//     return this.firstName;
//   }
//   // Private метод доступен только у данного класса
//   private getLastName(): string {
//     return this.lastName;
//   }
//
// }
/** Создаем екземпляр класса */
// let acc = new Account('Artem', 'Galas');
// acc.getName();
// // acc.getLastName() //метод private поэтому недоступен
/** Наследование классов */
// Главный класс
var FooBase = (function () {
    function FooBase() {
    }
    return FooBase;
}());
/** Наследоваться можно ТОЛЬКО от ОДНОГО класса */
// Наследник (ребенок)
var FooChild = (function (_super) {
    __extends(FooChild, _super);
    function FooChild() {
        var _this = _super.call(this) || this;
        _this.x;
        // this.y; // недоступно так как private свойство
        _this.z;
        return _this;
    }
    return FooChild;
}(FooBase));
/** Static методы */
var SomeClass = (function () {
    function SomeClass() {
        SomeClass.instance++;
    }
    return SomeClass;
}());
// static свойство или метод доступно только у конструктора данного класса
// использовать в любом методе класса также можно
SomeClass.instance = 0;
var s1 = new SomeClass();
var s2 = new SomeClass();
var s3 = new SomeClass();
console.log("Some class instance " + SomeClass.instance); // output 3;
// console.log(`s1 instance ${s1.instance}`) // ошибка так как метод статик доступен только у конструктора класса в котором описан
/** Имплиментация Интерфесов */
// interface IAccount {
//   getInfo: () => string;
// }
//
// interface Income{
//   getIncome: () => number;
// }
// // Имплиментировать можно сколько угодно интерфейсов
// class Account implements IAccount, Income {
//   constructor(
//     public firstName: string,
//     public income: number) {}
//
//   public getInfo(): string {
//     return this.firstName;
//   }
//
//   public getIncome(): number {
//     return this.getIncome();
//   }
// }
/** сеттеры set и геттеры get */
// class Account {
//   constructor(public firstName: string, public income: number) {}
//   // setter
//   get accountName():string {
//     return this.firstName
//   }
//   // getter
//   set accountName(firstname: string) {
//     this.firstName = firstname
//   }
//
// }
//
// let acc = new Account('Artem', 20);
// console.log(acc.accountName); //вызываем getter;
// acc.accountName = 'Vova'; // используем setter;
// console.log(acc.accountName);
/** Абстарктыне классы */
// abstract class Info {
//   abstract getInfo(): string;
//
//   getName(): string {
//     return 'Ha';
//   }
// }
//
// class Account extends Info {
//   getInfo():string {
//     return 'My info';
//   }
// }
//
// let acc = new Account();
//
// console.log(acc.getInfo());
// console.log(acc.getName()); 
//# sourceMappingURL=01.js.map