export {};

//! ==========
//! Parameters
//! ==========

//? Parameters<T>
// 関数型Tの「引数の型」を「タプル型」として抽出した型を構築する

const debugProfile = (name: string, age: number) => {
  console.log({ name , age });
}

debugProfile('Ham',43);

type Profile = Parameters<typeof debugProfile>

const profile: Profile = ['Gap',43];

debugProfile(...profile);