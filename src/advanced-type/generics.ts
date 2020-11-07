export {};

//! ============
//! ジェネリクス
//! ============

//? 定義
// 抽象的な型引数を使用して、実際に利用されるまで型が確定しない関数を実現する為に使用される

//? どんなメリットがある？
// 実装コストを大幅に削減できる

//? 以下2つはどんな関数？
// 引数と戻り値の「型」が異なるだけで「やっている処理」は同じ関数

// const echo = (arg: number) : number => {
  // return arg;
// }
//
// const echo = (arg: string) : string => {
  // return arg;
// }

//? なんとかしてこれら2つを共通化出来ないか？
// ジェネリクスという機能を使えば実現出来る

/**
 * @概要 ジェネリクス
 * @説明 抽象的な型引数<T>を関数に与え、実際に利用されるまで型が確定しない関数
 * @template T
 * @param {T} arg
 * @returns {T}
 */

const echo = <T>(arg: T): T => {
  return arg;
}

console.log(echo<number>(23));
console.log(echo<string>('type'));
console.log(echo<boolean>(true));

/**
 * @概要 クラスのジェネリック化
 * @説明 メソッドの返り値の型や引数の型としてクラスを通して使用される
 * @class Mirror
 * @template T
 */

class Mirror <T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello').echo());
console.log(new Mirror<boolean>(true).echo());