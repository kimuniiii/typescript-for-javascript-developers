export { };

// void型の変数にundefinedを入れることはできる
const a : void = undefined;

// undefined型の変数にvoid型の値を入れることはできない
// const b : undefined = a;

//! ==============
//! void型を返す関数
//! ==============

//? void型とは？
//「undefined」のみを値に取る変数の型

//? 使いどころは？
// 関数の返り値の型として使われ「何も返さない関数である」ことを表す

//? JavaScriptにおいて「何も返さない関数」とは？
// return文がない関数 or 返り値のないreturn文で返る関数

//? 特徴は？
// 返り値の型に「void型を指定する場合」は関数は値を返さなくて良くなる

/**
 * void型を返す関数
 *
 */

function returnNothing(): void {
  console.log("I don't return anything");
}

console.log(returnNothing())

//! ===================
//! undefined型を返す関数
//! ===================

// 返り値の型に「void型以外の型を指定する場合」は必ず返り値を返さなければならない

/**
 * undefined型を返す関数
 *
 * @return {undefined} undefined
 */

function returnAnything(): undefined {
  console.log('Anything');
  return undefined; // returnで「undefined」を返さないとエラーになる
}

console.log(returnAnything());