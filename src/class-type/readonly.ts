export {};

//! ==============
//! readonly修飾子
//! ==============

//? readonlyとは？
// クラスのプロパティを読み取り専用にするときに使う修飾子
// オブジェクトの型をreadonlyに出来る機能
// 型でreadonlyと宣言されているプロパティを書き換えようとするとコンパイルエラーになる

//? ベストプラクティスの書き方
//「readonly」をつけると「public」を付けなくてもいい、というルールがある
// readonly → 読み取りできる → アクセスできる → publicを省略してOK
// Q public readonly or readonly？
// A public readonly（明示的に書いた方がいい）

// class VisaCard {
//   readonly owner: string;

//   constructor(owner: string) {
//     this.owner = owner;
//   }
// }

//? constructorを簡潔に処理を実装するとどうなる？

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('はむさん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';
