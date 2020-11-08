export {};

//! ============
//! Readonly<T>
//! ============

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Ham',
  age: 43,
};

type Readonly<T> = { readonly [P in keyof T]: T[P] };
type PersonalDataTypes = Readonly<Profile>;

me.age++;

console.log(me);
