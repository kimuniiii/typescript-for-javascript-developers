export {};

//! =================
//! ゲッターとセッター
//! =================

//? アクセサーメソッド
// プロパティそのものは外部からアクセス出来ないようにしておく
// 代わりにプロパティにアクセスするためのメソッドを用意する

//? ゲッター
// プロパティが参照された時に呼び出される関数

//? セッター
// プロパティに値を設定しようとしたときに呼び出される関数

//? 要件

// * owner
//  * 所有者
//  * 初期化時に設定できる
//  * 途中で変更できない
//  * 参照できる

// * secretNumber
//  * 個人番号
//  * 初期化時に設定できる
//  * 途中で変更できる
//  * 参照できない

//? 要件を満たすためのソースコード

class MyNumberCard {
  // 外から直接読み書きして欲しくないプロパティを「_（アンダーバー）」で開始する
  // JavaScript Primerには「慣習」と書いてあるがTypeScriptでは「エラー」になる
  constructor(private _owner: string, private _secretNumber: number) {}

  // 参照することが専用のメソッド（ゲッター）
  get owner() {
    // 値を取得するためのコード
    return this._owner;
  }

  // 設定することが専用のメソッド（セッター）
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber : ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('カズキ', 123456789);

console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());
console.log(card.secretNumber);

// card._secretNumber
