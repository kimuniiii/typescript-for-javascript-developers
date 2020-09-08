export {};

//! =========================
//! union型（共用体型） = OR型
//! =========================

// 概要
// 値が複数の型のどれかに当てはまるような型

// 記法
// 複数の型を「|」で繋ぎ合わせて書く
// string | numberという型は「stringまたはnumberである値の型」である

let value : number | string = 1;
value = 'foo';
value = 100;
