export {};

//! =====================
//! number型の要素を持つ配列
//! =====================

// Array型（推奨されている書き方）
// number型の要素を持つ配列

let numbers: number[] = [1,2,3];

// Array型（別の書き方 = 非推奨）
// number型の要素を持つ配列

let numbers2 : Array<number> = [1,2,3];

//! =====================
//! String型の要素を持つ配列
//! =====================

// Array型（推奨されている書き方）
// string型の要素を持つ配列

let string : string[] = ["A","B","C"];

// Array型
// string型の要素を持つ配列

let strings : Array<string> = ["Tokyo","Osaka","Kyoto"];

//! ========
//! 2次元配列
//! ========

// Array型
// number型の要素を持つ2次元配列

let arr : number[][] = [
  [1,2],
  [3,4,]
]

//! ======================
//! 色々な型を持つ要素の配列
//! ======================

// string型 or number型 or boolean型の要素を持つ配列

let hybrid : (string | number | boolean)[] = [1,false,'string'];
