export {};

//! ====================
//! 名前空間（namespace）
//! ====================

//? 名前空間（パッケージ）とは？
// クラスをまとめる箱のようなもの

//? 名前空間を利用することでどんな利点がある？
// クラス名同士の競合を防ぐことが出来る

//? 結論
// namespaceを使えば無限にクラスを生成することができる

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
  }
  }
    export namespace Osaka {
      export class Person {
        constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ){}
  }
}

const me = new Japanese.Tokyo.Person('木村');
console.log(me);

const meOsaka = new Japanese.Osaka.Person('渡部');
console.log(meOsaka.name);

const meEnglish = new English.Person('Michael','Joseph','Jackson');
console.log(meEnglish);