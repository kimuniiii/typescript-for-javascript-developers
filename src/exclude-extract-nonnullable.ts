export {};

//! 3つに共通している要素は何か？
//! 既存の型を再利用しつつ新規の型をスムーズに構築できる

//? Exclude<T,U>
// T型のプロパティでU型に代入可能なプロパティを取り除いた型を構築する
// T : 全体のunion型
// U : 不要なプロパティが取り除かれたunion型

//? Extract<T,U>
// T型のプロパティでU型に代入可能なプロパティのみを残した型を構築する

//? NonNullable<T>
// Tからnullとundefinedを取り除いた型を構築する

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>
type NonFunctionType = Exclude<SomeTypes,DebugType>
type TypeExcludingFunction = Exclude<SomeTypes,Function> // 関数型の総称を除外したかったらこれ

type ExtractTypes = Extract<SomeTypes,string>
type DebugTypes = Extract<SomeTypes,DebugType>
type FunctionTypes = Extract<SomeTypes,Function> // 関数型の総称を除外したかったらこれ

type NonNullableTypes = NonNullable<null | undefined | string>