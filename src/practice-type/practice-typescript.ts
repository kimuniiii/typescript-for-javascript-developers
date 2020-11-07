export {};

//! =================
//! 関数のジェネリックス
//! =================

// const generics = (args : number) : number => {
//   return args
// }

// const generics = (args : string) : string => {
//   retrun args;
// }

const generics = <T>(args: T): T => {
  return args;
};

console.log(generics(43));
console.log(generics('木村'));
console.log(generics(true));

//! =================
//! クラスのジェネリクス
//! =================

// class Generics {
//   public args: string;

//   constructor(args: string) {
//     this.args = args;
//   }

//   echo(): string {
//     return this.args;
//   }
// }

// console.log(new Generics('kazuki').echo());

class Generics {
  public args: number;

  constructor(args: number) {
    this.args = args;
  }
  echo(): number {
    return this.args;
  }
}

console.log(new Generics(123).echo());

// class Generics<T> {
//   public args: T;

//   constructor(args: T) {
//     this.args = args;
//   }

//   echo(): T {
//     return this.args;
//   }
// }

// console.log(new Generics<number>(123).echo());

//! ======================
//! Widening Literal Types
//! ======================

const widening = 'hoge';

const test = { widening: widening };

test.widening = 'str';
console.log(test.widening);

// const nonWideningLiteral = 'kkk' as const;
const nonWideningLiteral: 'kkk' = 'kkk';

const obj = { nonWideningLiteral };
obj.nonWideningLiteral = 'str';
