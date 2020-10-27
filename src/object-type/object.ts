export {};

//! =================
//! interfaceで型注釈
//! =================

// TypeScript独自の（JavaScriptには存在しない）構文
// オブジェクト型に名前を付けることが出来る

interface MyObj {
  foo: string;
  bar: number;
}

const a: MyObj = {
  foo: 'foo',
  bar: 3,
};

//! ===============
//! objectで「型注釈」
//! ===============

// プロパティまで指定することができない
// JavaScriptには「オブジェクトのみを引数に取る関数」が存在する

let profile1: object = { name: 'Kimura' };
profile1 = { age: 25 };
profile1 = { name: 'foo' };

//! ===============================
//! 何もプロパティがない波括弧で「型注釈」
//! ===============================

// 何もプロパティのない「波括弧」で型注釈を行うのはよくない
// なぜならオブジェクト以外も受け付けてしまうから
// 正確には「undefined」と「null」以外は受け入れてしまう

const testObj = { foo: 'foo' };
const testObj2: {} = testObj;

const objNumber: {} = 3;
console.log(objNumber); // 3

interface Length {
  length: number;
}

const testObj3: Length = 'foobar';

//! ===============================
//! 波括弧でプロパティを指定して「型注釈」
//! ===============================

// プロパティ（key:valueの集合）まで「型指定」が出来る
// なので出来るだけ「波括弧」で型宣言を行うべきである

let profile2: { name: string } = { name: 'Ham' };
profile2 = { name: 'Kazuki' };
// profile2 = 43;

//! =============================
//! 構造的部分型を採用しているTSの動き
//! =============================

interface testObj {
  name: string;
  age: number;
}

interface testObj2 {
  name: string;
}

const obj: testObj = { name: 'name', age: 25 };

//? 問題
// エラーになる？ならない？
const obj2: testObj2 = obj;

//? 問題
// エラーになる？ならない？
// const obj3 : testObj2 = {name : 'name', age : 25 }
