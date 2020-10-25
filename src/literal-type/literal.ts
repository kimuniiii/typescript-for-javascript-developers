export {};

//! ==========
//! リテラル型
//! ==========

// リテラル型とは？
// プリミティブ型を細分化したもの
// 文字列・数値・真偽値のリテラル型がある

let dayOfTheWeek : '日' | '月' | '火' | '水' | '木' | '金' | '土' =  '日';
dayOfTheWeek = '月'
dayOfTheWeek = '火'
dayOfTheWeek = '水'
dayOfTheWeek = '木'
dayOfTheWeek = '金'
dayOfTheWeek = '土'
// dayOfTheWeek = '31'

let month : 1|2|3|4|5|6|7|8|9 = 2;
month = 7;
// month = 18;

let TRUE : true  = true;
// TRUE = false;

//! =======================
//! リテラル型と型推論と型注釈
//! =======================

//? constで変数宣言した場合
// 変数aに'foo'が代入されている
// 型推論される変数aの型は「foo型 = リテラル型」になる

const a = 'foo';
// const b : string = a; // エラーになる

//? var・letで宣言した場合
// 変数bに'foo'が代入されている
// 型推論される変数bの型は「string型 = プリミティブ型」になる

let b = 'foo';
const c : string = b; // エラーにならない


