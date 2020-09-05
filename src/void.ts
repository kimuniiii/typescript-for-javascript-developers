export { };

//! =========
//! void型
//! =========

// void型とは？
//「undefined」のみを値に取る変数の型

// 使いどころは？
// 関数の返り値の型として使われ「何も返さない」ことを表す

// 特徴は？
// 返り値が「void型」である関数は値を返さなくて良くなる
// 逆にそれ以外の型の場合（any型を除く）は必ず返り値を返さなければならない

function returnNothing(): void {
  console.log("I don't return anything");
}

console.log(returnNothing())

//! ===========
//! undefined型
//! ===========

function returnAnything(): undefined {
  console.log('Anything');
  return undefined; // returnで「undefined」を返さないとエラーになる
}

console.log(returnAnything());