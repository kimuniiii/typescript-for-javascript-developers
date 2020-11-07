export {};

//! ==============
//! 型の互換性
//! ==============

//? 型の互換性とは？
// ある型の変数に別の型である変数が代入できれば「型の互換性」があると言える
// 型に「互換性」があるかどうかで代入できるかどうか決まる

//? この型の互換性はどのように決まるのか？
// 構造的部分型によって決まる

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

//? これは代入できる？
// fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooInCompatible: string;
let barIncompatible: number = 1;

//? これは代入できる？
// fooInCompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';

//? これは代入できる？
fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;

//? これは代入できる？
fooNumber = fooNumberLiteral;

//! オブジェクトの型の互換性
// 構造的部分型が適用されている

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'きむら');
