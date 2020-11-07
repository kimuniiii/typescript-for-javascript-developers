export {};

//! ======================
//! 抽象クラスと抽象メソッド
//! ======================

//? どんな場面で有効な機能？
// 大規模な開発を行う際に非常に便利な機能

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar'
  }
}

class Tiger extends Animal {
  cry() {
    return 'gr';
  }
}

const animal = new Tiger()
console.log(animal.cry());