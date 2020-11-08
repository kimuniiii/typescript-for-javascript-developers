export {};

//! =============
//! Mapped Types
//! =============

//? Mapped Typesとは？
// { [ P in K ]: T } という構文を持つ型
// { [ P in K ]: T } = { K: T; K: T; }

//? ハムさんメモ
// 既存のオブジェクトの型を流用して新たに型を定義することが出来る
// 具体的には「in keyof」
// 大事なことは「あるオブジェクトのプロパティの名前から型を作ってそれを1つずつ取り出している」ことを理解できること

type Profile = {
  name: string;
  age: number;
};

//! =========
//! Partial型
//! =========

type Partial<T> = { [P in keyof T]?: T[P] };
type PartialProfile = Partial<Profile>;

type Optional<T> = { [P in keyof T]?: T[P] | null };
type OptionalProfile = Optional<Profile>;

//! ==========
//! Required型
//! ==========

type Required<T> = { -readonly [P in keyof T]: T[P] };
type Obj = Required<Profile>;

//! ===========
//! Readonly型
//! ===========

type Readonly<T> = { readonly [P in keyof T]: T[P] };
type obj2 = Readonly<Profile>;

type PropertyTypes = keyof Profile;
