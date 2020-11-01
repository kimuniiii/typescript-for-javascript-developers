export {};

//! ====================
//! constructorを使い倒す
//! ====================

//? TypeScript独自のコンストラクタの書き方
// 引数にアクセス修飾子を書くことで自動で初期化処理を行ってくれる
// この言語仕様を利用してどうコードを書けばいいのか以下に記す

class Person {
  constructor(public name: string, protected age: number) {}
}

//! 上記構文は以下の構文と内部的には同じ処理を行う

// class Person {
//   public name: string;
//   protected age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

const me = new Person('Ham', 33);
console.log(me);
