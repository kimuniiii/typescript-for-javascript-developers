export {};

//! ===================
//! null型・undefined型
//! ===================

let absence : null = null;
// absence = 1;

let data : undefined = undefined;
// data = "string";

//! ====================================
//! --strictNullChecksの設定による挙動の違い
//! ====================================

//? trueの場合
// コンパイルして実行したらエラーが出る

//? falseの場合
// コンパイルして実行してもエラーが出ない

const a : null = null;
const b : string = a;