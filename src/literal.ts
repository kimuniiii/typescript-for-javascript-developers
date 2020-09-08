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
