export {};

//! ================
//! インターフェイス
//! ================

//? クラスの継承
// 継承元である親クラスは1つ

//? インターフェイスの実装
// 複数のインターフェイスを継承して新しいインターフェイスを作れる

//? 抽象クラスとインターフェイスの共通点は？
// 具体的な処理内容を記述しない
// メソッドや変数に型だけを記述

//? 抽象クラスとインターフェイスの相違点は？
// 多重継承が出来るかどうか
// メソッドのオーバーライドが出来るかどうか

//! クラス
class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {}

//! インターフェイス
interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

/**
 * @概要 複数のインターフェイスの実装
 * @説明 インターフェイスの実装では多重継承が出来ることを確かめるための宣言文
 * @class Jiro
 * @implements {Kenja}
 * @implements {Senshi}
 */

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }

  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
