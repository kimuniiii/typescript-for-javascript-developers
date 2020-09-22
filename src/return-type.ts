export {};

//! ================
//! Return Type
//! ================

//? ReturnType<T>とは？
// 関数型Tの戻り値の型を返す
// 関数の戻り値の型を自力で持ってこようとすると厳しい

const add = (a: number,b: number) => {
  return a + b;
}

console.log(add(1,2));

type ReturnTypeFromAdd = ReturnType<typeof add>