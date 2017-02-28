var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/** Декоратор метода */
var MathLib = (function () {
    function MathLib() {
    }
    MathLib.prototype.areaOfCircle = function (r) {
        return Math.PI * Math.pow(r, 2);
    };
    __decorate([
        logMethod
    ], MathLib.prototype, "areaOfCircle", null);
    return MathLib;
}());
function logMethod(target, key, descriptor) {
    console.log(target);
    console.log(key);
    console.log(descriptor);
    var originDescriptor = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var b = args.map(function (a) { return JSON.stringify(a); }).join();
        var result = originDescriptor.apply(this, args);
        var r = JSON.stringify(result);
        console.log("Call " + key + "(" + b + ") => " + r);
        return result;
    };
    return descriptor;
}
var mathLib = new MathLib();
mathLib.areaOfCircle(4);
// Call areaOfCircle(4) => 50.26548245743669
/** Декоратор свойства */
var Account = (function () {
    function Account(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    __decorate([
        logProperty
    ], Account.prototype, "firstName", void 0);
    return Account;
}());
function logProperty(target, key) {
    var _val = target[key];
    var getter = function () {
        console.log("Get: " + key + " => " + _val);
        return _val;
    };
    var setter = function (newVal) {
        console.log("Set: " + key + " => " + newVal);
        _val = newVal;
    };
    Object.defineProperty(target, key, {
        get: getter,
        set: setter
    });
}
var me = new Account('Artem', 'Halas');
me.firstName;
me.firstName = 'Vova';
// Set: firstName => Artem
// Get: firstName => Artem
// Set: firstName => Vova
/** Декоратор класса */
var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person = __decorate([
        logClass
    ], Person);
    return Person;
}());
function logClass(target) {
    return function () {
        console.log("New instance of " + target.name);
        return target;
    };
}
var person = new Person('Artem', 'Halas');
var person2 = new Person('Vova', '123');
// New instance of Person
// New instance of Person
/** Декоратор параметра + декоратор метода */
var PersonAccount = (function () {
    function PersonAccount(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonAccount.prototype.sayMessage = function (msg) {
        return this.firstName + " " + this.lastName + ": " + msg;
    };
    __decorate([
        readMetaData,
        __param(0, logParametr)
    ], PersonAccount.prototype, "sayMessage", null);
    return PersonAccount;
}());
function logParametr(target, key, index) {
    var metadataKey = "___Log_" + key + "_parameters";
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    }
    else {
        target[metadataKey] = [index];
    }
}
function readMetaData(target, key, descriptor) {
    var metadataKey = "___Log_" + key + "_parameters";
    var indices = target[metadataKey];
    var originDescriptor = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.log(key + " arg[" + indices + "]: " + args[indices]);
        return originDescriptor.apply(this, args);
    };
    return descriptor;
}
var personAccount1 = new PersonAccount('Artem', 'Halas');
personAccount1.sayMessage('decorators is good');
personAccount1.sayMessage('decorators is good and go Angular');
/** namespace - раздаеление областей видимости */
var Shipping;
(function (Shipping) {
    var Ferry = (function () {
        function Ferry(name, port, income) {
            this.name = name;
            this.port = port;
            this.income = income;
        }
        return Ferry;
    }());
    Shipping.Ferry = Ferry;
})(Shipping || (Shipping = {}));
var b;
var a = new Shipping.Ferry('ship', 'france', 20);
/** Декоратор метода с параметром */
// class MathLib {
//
//   @logMethod('Log my method')
//   public areaOfCircle(r: number): number {
//     return Math.PI * r ** 2;
//   }
// }
//
// function logMethod(msg): any {
//
//   return(target: any, key: string, descriptor: any) => {
//     let originDescriptor = descriptor.value;
//
//     descriptor.value = function (...args: any[]): any {
//       let b = args.map((a: any) => JSON.stringify(a)).join();
//       let result = originDescriptor.apply(this, args);
//       let r = JSON.stringify(result);
//       console.log(`${msg} => Call ${key}(${b}) => ${r}`);
//       return result;
//     };
//
//     return descriptor;
//   }
// }
//
// let mathLib = new MathLib();
// mathLib.areaOfCircle(4);
// Log my method => Call areaOfCircle(4) => 50.26548245743669
//# sourceMappingURL=decorators.js.map