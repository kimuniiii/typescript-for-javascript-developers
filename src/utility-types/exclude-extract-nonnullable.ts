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
type SomeTypes = string | number | boolean | DebugType;

// Exclude<T,U>
type BooleanDebugType = UserExclude<SomeTypes, string | number>;
type NonBooleanType = Exclude<SomeTypes, boolean>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>; // 関数型の総称を除外したかったらこれ

// Extract<T,U>
type ExtractTypes = Extract<SomeTypes, string>;
type DebugTypes = Extract<SomeTypes, DebugType>;
type FunctionTypes = Extract<SomeTypes, Function>; // 関数型の総称を除外したかったらこれ

// NonNullable<T>
type NonNullableTypes = NonNullable<null | undefined | string>;

// Exclude<T,U>を自作する

type UserExclude<T, U> = T extends U ? never : T;

// Extract<T,U>を自作する

type UserExtract<T, U> = T extends U ? T : never;

// NonNullable<T>を自作する

type UserNonNullable<T> = T extends null | undefined ? never : T;
