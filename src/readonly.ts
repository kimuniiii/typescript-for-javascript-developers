export {};

//! ==============
//! readonly修飾子
//! ==============

//? readonlyとは？
// オブジェクトの型をreadonlyに出来る機能
// 型でreadonlyと宣言されているプロパティを書き換えようとするとコンパイルエラーになる

// ベストプラクティスの書き方
// Q public readonly or readonly？
// A public readonly

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('はむさん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';