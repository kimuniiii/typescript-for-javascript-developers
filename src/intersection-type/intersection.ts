export {};

//! ======================
//! intersection型 = AND型
//! ======================

//? intersection型はどんな型？
// 既存の型を利用して新たな型を定義できる型
// 2つの型「T, U」に対して「T & U」と書くと「TでもありUでもあるような型」を表す

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const Sasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const Ochiai: Batter1 = {
  battingAverage: 0.367,
};

// type TwoWayPlayer = {
//   throwingSpeed : number;
//   battingAverage : number;
// }

type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.321,
};
