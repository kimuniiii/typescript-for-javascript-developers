export {};

//! ========================
//! interface と type の比較
//! ========================

// type
// 型や型の組み合わせに別名を付ける
type ObjectType = {
  name : string;
  age : number;
}

// interface
// オブジェクトの型に名前を付ける
interface ObjectInterface {
  name : string,
  age : number,
}

let object : ObjectInterface = {
  name : 'Han-san',
  age : 43,
}