export {};

//! ===========
//! never型
//! ===========

//? never型とは？
// 属する値が存在しない型
// どんな値もnever型の変数に入れることは出来ない

// const testNever : never = 0;
// const testNever2 : never = 'foo';

//? 関数の返り値の型がnever型となるのは？
// 関数が値を返す可能性がないとき

//? never型とvoid型の違いは何か？
// そもそも関数が正常に終了して値が返ってくることがありえない場合にnever型を使う

// 例外処理を定義している関数の返り値は「never型」がベスト

/**
 * 処理が正常に終了して値が返ってくることのない関数
 * 値を返さないことを明示したい場合はneverで型注釈を行う
 * @param {string} message
 * @return {never}
 */

function error(message: string): never {
  throw new Error(message);
}

try {
  error('test');
} catch (error) {
  console.log(error.message);
}
