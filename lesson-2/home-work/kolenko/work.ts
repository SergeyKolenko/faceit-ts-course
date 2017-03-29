// 1
function isInArray(arr: any[], ...args: any[]): boolean {
    console.log(`arr: ${arr}; args: ${args}`);
    let including: boolean;
    for (let arg of args) {
        including = arr.includes(arg);
        if (!including) {
            break;
        }
    }
    return including;
}
console.log('First Task');
console.log(`result: ${isInArray([1, 4, 6, 77, 734, 'qwer', 'asdf'], 4, 6, 'qwer')}`);
console.log(`result: ${isInArray([1, 4, 6, 77, 734, 'qwer', 'asdf'], 4, 6, 111, 'qwer')}`);
console.log('------------------------------------------------------------------------');

//2
function summator(...args: (number | string)[]): number {
    console.log(`args: ${args}`);
    let sum: number = 0;
    for (let item of args) {
        sum += item as number;
    }
    return sum;
}
console.log('Second Task');
console.log(`result: ${summator(2, 5, 6, '3', '7', 4)}`);
console.log(`result: ${summator(4, 7, 6, '3', '5', '2')}`);
console.log('------------------------------------------------------------------------');


//3
function getUnique(...arr: any[]): any[] {
    console.log(`array: ${arr}`);
    let result: any[] = [];
    for (let item of arr) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    return result;
}
console.log('3 Task');
console.log(`result: ${getUnique(2, 5, 5, '3', '7', 4, 5, 4)}`);
console.log(`result: ${getUnique(4, 7, 6, '3', '5', '2', '2', '3', '3', 7)}`);
console.log('------------------------------------------------------------------------');