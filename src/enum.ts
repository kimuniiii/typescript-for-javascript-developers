export {};

enum Months {
  January = 1,
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
  December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// これと同じコードをJavaScriptで書こうとしたらどうなる？

const MonthsJs = {
  January : 0,
  February : 1,
}

console.log(MonthsJs.January);

enum Colors {
  RED = '#FF0000',
  BLUE = '#0000FF',
  WHITE = '#FFFFFF',
  BLACK = '#000000',
  GREEN = '#008000',
}

let green = Colors.GREEN;
console.log({green});

enum Colors {
  YELLOW = '#FFFF00',
  GRAY = '#808080',
}

let yellow = Colors.YELLOW;
console.log(yellow);