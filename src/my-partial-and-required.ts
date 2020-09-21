export {};

//! =================
//! Partial・Required
//! =================

//? Partial<T>
// Tの全てのプロパティを「任意のプロパティ」にする機能

//? Required<T>
// Tの全てのプロパティを「必須のプロパティ」にする機能

type Profile = {
  name?: string;
  age?: number;
  zipCode?: number;
}

type PartialType = Partial<Profile>
type RequiredType = Required<Profile>