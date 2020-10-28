export {};

//! =========
//! TypeAlias
//! =========

// 型に別名をつけることができる
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Kazuki',
  age: 25,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Ryu',
  age: 24,
};

type Profile2 = typeof example1;
