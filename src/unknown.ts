export {};

//! ========================
//! unknown型・any型・never型
//! ========================

// 型が不定の時
// TypeScriptでは「any」または「unknown」という型を使う

// any・unknownについて
// any型・unknown型はどのような値も代入できる

// any・unknownの違いは？
// any型・・・any型に代入したオブジェクトのプロパティ・メソッドを使用できる（TypeScriptが型のチェックを放棄した型）
// unknown型・・・unknown型に代入したオブジェクトのプロパティ・メソッドを使用できない・実行できない

// neverについて
// never型はどの値も代入できない

const kansu = () : number => {
  return 43;
}

let numberAny : any = kansu();
let numberUnknown : unknown = kansu();

let sumAny = numberAny + 10;

//! ============
//! typeof型
//! ============

// typeof型
//「typeof 変数」と書くと「その変数の型」が得られる

console.log(typeof numberUnknown); // return {number}

//? typeofを使ってある特定の型であることを確認しながらコードを安全に実行させる仕組みを何と呼ぶ？
//? タイプガード（型ガード）
//? こうすることで「ランタイムエラー」を極力回避するコードを実装することが出来る

if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
  console.log('処理が走る');
}
