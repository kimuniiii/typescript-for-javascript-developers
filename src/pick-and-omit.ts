export {};

//! ===================
//! Pick<T,K> Omit<T,K>
//! ===================

//? Pick<T,K>
// 既に存在するT型の中からKで選択した一部のプロパティのみを含んだ新たな型を構築する

//? Omit<T,K>
// 既に存在するT型の中からKで選択した一部のプロパティを除いた新たな型を構築する

type DetailedProfile = {
  name : string;
  height :  number;
  weight : number;
};

type SimpleProfile = Pick<DetailedProfile, 'height' | 'name' >
type SmallProfile = Omit<DetailedProfile, 'name'>