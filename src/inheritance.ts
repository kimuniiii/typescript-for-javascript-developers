export {};

//! ======
//! 継承
//! ======

//? 継承とは？
// 既存のクラスを拡張して新たなクラスを作りあげること
// 元になるクラスの機能を引き継いで、新たなクラスを定義する機能

//? オーバーライドとは？
// 子クラスのメソッドが親クラスのメソッドを上書きすること
// 親クラスと同じ名前のメソッドを子クラスに定義すると、子クラスのメソッドが優先して使用される性質

//? オーバーライドが出来る2つのパターン
// 親クラスと同じ名前のメソッドを子クラスに定義する場合
// 子クラスに新たなプロパティを追加する場合（super()を用いる）

/**
 * @概要 親クラス（基底クラス）
 * @説明 親クラスのプロパティとメソッドを定義
 * @class Animal
 */

class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'I can run';
  }
}

/**
 * @概要 子クラス（派生クラス）
 * @説明 親クラスを継承するための書き方を学ぶため
 * @class Lion
 * @extends {Animal}
 */

class Lion extends Animal {
  public speed : number;

  constructor(name: string, speed : number) {
    super(name); // super() = 親クラスのコンストラクタを実行している
    this.speed = speed; // 子クラス独自の処理を実行している
  }

  run(): string {
    const parentMessage = super.run(); // super.run() = 親クラスのrunメソッドを実行している
    console.log({parentMessage}); // 省略記法
    return `${super.run()} ${this.speed}km.`;
  }
}

// let animal = new Animal();
// console.log(animal.run());
// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());