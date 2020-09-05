export {};

//! ===========
//! never型
//! ===========

// never型とは？
// 属する値が存在しない型
// どんな値もnever型の変数に入れることは出来ない

// 関数の返り値の型がnever型となるのは？
// 関数が値を返す可能性がないとき

function error(message : string) : never {
  throw new Error(message);
}

try {
  error('test');
} catch (error) {
  console.log(error.message);
}