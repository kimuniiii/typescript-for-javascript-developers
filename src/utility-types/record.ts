export {};

//? Record<K,T>とは？
// KがプロパティとなりT型を持つレコード型を構築する
// K : keyの型
// T : valueの型

interface User {
  name: string;
}

type UserList = Record<number, User>;

const list: UserList = { 0: { name: 'kazuki' }, 1: { name: 'kimura' } };
console.log(list);

// 俺が最初に試しに書いたコード
// type Record<K extends keyof any, T> = { K : ([P in keyof T]: T[P])};

// 実際の正解コード
// type Record<K extends keyof any, T> = { [P in K]: T };

type Prefectures = 'Tokyo' | 'Chiba' | 'Osaka' | 'Shiga';

interface Covid19InfectionInfo {
  kanji_name: string;
  confirmed_cases: number;
}

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 2000 },
  Osaka: { kanji_name: '大阪', confirmed_cases: 3000 },
  Shiga: { kanji_name: '滋賀', confirmed_cases: 2400 },
};
