export {};

//! ============
//! static修飾子
//! ============

//? なぜ「static修飾子」を使って静的メンバを定義する必要があるのか？
//? 問題を解決できるから（なぜ？の解答は基本的にこれ）

//? どんな問題を解決できる？
// いちいちインスタンス化しなくても良くなるから（手間の削減）
// 全インスタンスで共有されるから（再利用性が高いから）
// メモリ領域の節約が出来るから（節約が出来るから）

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Kazuki';
  static lastName: string = 'Kimura';

  static work() {
    return `TypeScript ${this.firstName}!!`;
  }
}

let me = new Me();
console.log(Me.work());
