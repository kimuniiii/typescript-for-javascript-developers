export {};

//! =====================
//! インデックスシグネチャ
//! =====================

//? 定義
// インデックス + シグネチャ
// インデックス（オブジェクトのkey）
// シグネチャ（署名・サイン）
// プロパティの「キー」に対して型注釈を付けるための仕組み

//? 書き方
// { [ index : typeForIndex ]: typeForValue }

// 型が冗長だと思ったら「interface」にまとめる
interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { underTwenty: false };

profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';
