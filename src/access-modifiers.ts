export {};

//! ==============
//! アクセス修飾子
//! ==============

//? public
// 書いても書かなくても同じ意味
// なので書かないのが普通

//? private
// 外部からのアクセスはダメ。内部からのアクセスはOK。

//? protected
// 親クラスを継承した子クラスからはアクセス可能。

class Person {
  public name: string;
  protected age: number;
  public nationality : string;

  //? TypeScriptの言語仕様
  // コンストラクタの戻り値に該当する型は書かない

  constructor(name: string, age: number, nationality: string) {

    // コンストラクタ関数の処理
    // インスタンス化されると自動的に呼び出される

    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name:string,age:number,nationality:string) {
    super(name,age,nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('太郎',33,"日本");
let taro2 = new Android("太郎",34,"イタリア");
console.log(taro.profile());
console.log(taro2.profile());
console.log(taro.name);

// console.log(taro.age);