export {};

//! ======
//! enum型
//! ======

//? enum型とは？
// 関連する値の集合を編成する方法

// 何も指定しない場合は0から数字が割り振られていく
enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// これと同じコードをJavaScriptで書こうとしたらどうなる？

const MonthsJs = {
  January: 0,
  February: 1,
};

console.log(MonthsJs.January);

// 任意の数字や文字列を割り当てることができる
enum Colors {
  RED = '#FF0000',
  BLUE = '#0000FF',
  WHITE = '#FFFFFF',
  BLACK = '#000000',
  GREEN = '#008000',
}

let green = Colors.GREEN;
console.log({ green });

enum Colors {
  YELLOW = '#FFFF00',
  GRAY = '#808080',
}

let yellow = Colors.YELLOW;
console.log({ yellow: yellow });
