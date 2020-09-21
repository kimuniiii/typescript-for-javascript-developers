export {};

type Profile = {
  name: string;
  age: number;
}

const me: Profile = {
  name: 'Ham',
  age: 43,
}

type PersonalDataTypes = Readonly<Profile>

me.age++;

console.log(me);

type YomitoriSenyo<T> = { readonly [P in keyof T] : T[P]; }
type YomitoriSenyoProfile = YomitoriSenyo<Profile>