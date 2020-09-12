export{};

class Person{
  name: string;
  age: number;

  // TypeScriptの言語仕様
  // コンストラクタの戻り値に該当する型は書かない（:voidとか書けない）
  constructor(name: string,age: number) {
    // コンストラクタ関数の処理
    // インスタンス化されると自動的に呼び出される
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

let taro = new Person('太郎',33);
console.log(taro.profile());