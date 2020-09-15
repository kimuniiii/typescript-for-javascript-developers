export {};

//! ===============
//! Nullable Types
//! ===============

// まだ分からない、という状態を設定したい時に使う

//? 使い分け

//? Nullableな状態とは？
// どんな変数にも「null」を代入することができる（able）状態
// "strictNullChecks": false（tsconfig.json）

//? UnNullableな状態とは？（開発者に暴挙を起こさせない方法）
// どんな変数にも「null」を代入することができない（unable）状態
// "strictNullChecks": true（tsconfig.json）

//? UnNullableな状態でnullを代入できるようにするには？
// 共用体（union）型を明示的に指定してあげればいい

let profile: { name : string, age : number } = {
  name : 'Ham',
  age : null,
}

profile.name = 'Ham';
profile.age = 43;
