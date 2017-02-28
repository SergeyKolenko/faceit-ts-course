/** Декоратор метода */
class MathLib {

  @logMethod
  public areaOfCircle(r: number): number {
    return Math.PI * r ** 2;
  }
}

function logMethod(target: any, key: string, descriptor: any): any {
  console.log(target);
  console.log(key);
  console.log(descriptor);

  let originDescriptor = descriptor.value;

  descriptor.value = function (...args: any[]): any {
    let b = args.map((a: any) => JSON.stringify(a)).join();
    let result = originDescriptor.apply(this, args);
    let r = JSON.stringify(result);

    console.log(`Call ${key}(${b}) => ${r}`);

    return result;
  };

  return descriptor;
}

let mathLib = new MathLib();
mathLib.areaOfCircle(4);
// Call areaOfCircle(4) => 50.26548245743669


/** Декоратор свойства */

class Account {
  @logProperty
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

function logProperty(target: any, key: string): void {
  let _val = target[key];
  let getter = function (): typeof _val {
    console.log(`Get: ${key} => ${_val}`);
    return _val;
  };

  let setter = function (newVal): void {
    console.log(`Set: ${key} => ${newVal}`);
    _val = newVal;
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter
  })
}

let me = new Account('Artem', 'Halas');
me.firstName;
me.firstName = 'Vova';

// Set: firstName => Artem
// Get: firstName => Artem
// Set: firstName => Vova

/** Декоратор класса */

@logClass
class Person {
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

function logClass(target: any): any {
  return () => {
    console.log(`New instance of ${target.name}`);
    return target;
  }
}

let person = new Person('Artem', 'Halas');
let person2 = new Person('Vova', '123');

// New instance of Person
// New instance of Person

/** Декоратор параметра + декоратор метода */
class PersonAccount {
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  @readMetaData
  public sayMessage(@logParametr msg: string): string {
    return `${this.firstName} ${this.lastName}: ${msg}`
  }

}

function logParametr(target: any, key: string, index: number): void {


  let metadataKey = `___Log_${key}_parameters`;

  if(Array.isArray(target[metadataKey])) {
    target[metadataKey].push(index);
  } else {
    target[metadataKey] = [index];
  }
}

function readMetaData(target: any, key: string, descriptor: any): any {
  let metadataKey = `___Log_${key}_parameters`;
  let indices = target[metadataKey];

  let originDescriptor = descriptor.value;

  descriptor.value = function (...args: any[]): any {
    console.log(`${key} arg[${indices}]: ${args[indices]}`);
    return originDescriptor.apply(this, args);
  };

  return descriptor;
}

let personAccount1 = new PersonAccount('Artem', 'Halas');
personAccount1.sayMessage('decorators is good');
personAccount1.sayMessage('decorators is good and go Angular');



/** namespace - раздаеление областей видимости */

namespace Shipping {
  export interface Ship {
    name: string;
    port: string;
    income: number;
  }

  export class Ferry implements Ship {
    constructor(
      public name:string,
      public port: string,
      public income: number
    ){}
  }
}

let b: Shipping.Ship;
let a = new Shipping.Ferry('ship', 'france', 20);


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

