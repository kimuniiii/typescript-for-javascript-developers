export {};

//! ==================
//! Conditional Types
//! ==================

//? Conditional Typesとは？
// 構文 : type MyCondition<T, U, X, Y> = T extends U ? X : Y;
// 意味 : TがUに代入可能であればXを、そうでなければYを

//? Distributive Conditional Typesとは？
// 直訳すると「分配的な条件付きの型」
// Union TypesのConditional TypesはそれぞれのConditional TypesのUnionに展開される
// (T1 | T2) extends U ? X : Y = (T1 extends U ? X : Y) | (T2 extends U ? X : Y)

type MyExclude = DebugType;
type MyFunctionType = MyExclude;

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>
type NonFunctionType = Exclude<SomeTypes,DebugType>
type TypeExcludingFunction = Exclude<SomeTypes,Function> // 関数型の総称を除外したかったらこれ

type ExtractTypes = Extract<SomeTypes,string>
type DebugTypes = Extract<SomeTypes,DebugType>
type FunctionTypes = Extract<SomeTypes,Function> // 関数型の総称を除外したかったらこれ

type NonNullableTypes = NonNullable<null | undefined | string>