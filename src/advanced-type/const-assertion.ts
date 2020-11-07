export {};

//! =================
//! constアサーション
//! =================

//? メモ
// TypeScript3.4で追加された新機能

//! Widening Literal Types

const widening = 'String';

const test = {
  widening: widening,
};

//? 出力結果はどうなる？
console.log(test.widening);

//! NonWidening Literal Types

const nonWidening = 'Hoge' as const;

//? 上記構文は以下の構文と同じ意味
// const nonWidening: 'Hoge' = 'Hoge'

const test2 = {
  nonWidening: nonWidening,
};

//? 出力結果はどうなる？
console.log(test2.nonWidening);

//? オブジェクトのプロパティを簡潔に読み取り専用にする方法
// {} as const と書く（読み取り専用になるから）

let obj = {
  name: 'String',
  age: 24,
} as const;

// obj.name = 'Hoge';
// obj.age = 35;
