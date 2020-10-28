export {};

//! =========================
//! union型（共用体型） = OR型
//! =========================

//? 概要
// 値が複数の型のどれかに当てはまるような型

//? 記法
// 複数の型を「|」で繋ぎ合わせて書く
// string | numberという型は「stringまたはnumberである値の型」である
// すなわち「文字列または数値の型」という意味である

let value: number | string = 1;
value = 'foo';
value = 100;

//! ==================
//! union型の絞り込み
//! ==================

// union型はそのままでは使いにくい
// なぜなら、値が実際にはどちらなのかを実行時に判定しないといけないから
// TypeScriptでは判定を検出して適切に型を絞り込んでくれる機能がある

interface allowStringNumber {
  foo: string;
  bar: number;
}

interface allowNumberBoolean {
  foo: number;
  baz: boolean;
}

const func = (args: allowNumberBoolean | allowStringNumber): void => {
  if ('bar' in args) {
    console.log('allowStringNumber', args.bar);
  } else {
    console.log('allowNumberBoolean', args.baz);
  }
};

func({ foo: 'k', bar: 1 });
