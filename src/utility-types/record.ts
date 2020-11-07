export {};

//? Record<K,T>とは？
// KがプロパティとなりT型を持つレコード型を構築する
// K : keyの型
// T : valueの型

type Prefectures = 'Tokyo' | 'Chiba' | 'Osaka' | 'Shiga';

interface Covid19InfectionInfo {
  kanji_name : string;
  confirmed_cases : number;
};

const covid19Japan : Record<Prefectures,Covid19InfectionInfo> = {
  Tokyo : { kanji_name:'東京', confirmed_cases: 1960},
  Chiba : { kanji_name:'千葉', confirmed_cases: 2000},
  Osaka : { kanji_name:'大阪', confirmed_cases: 3000},
  Shiga : { kanji_name:'滋賀', confirmed_cases: 2400}
}