export {};

// TypeScript独自の（JavaScriptには存在しない）構文
// オブジェクト型に名前を付けることが出来る
interface MyObj {
  foo : string;
  bar : number;
}

const a : MyObj = {
  foo : 'foo',
  bar : 3,
}

// objectで「型注釈」
let profile1 : object = { name : "Kimura"};
profile1 = { age : 25}

// 波括弧で「型注釈」
// プロパティまで「型指定」が出来る
// なので出来るだけ「波括弧」で型宣言を行うべきである

let profile2 : {
  name: string;
} = { name : "Ham"};
profile2 = { name : 'Kazuki'}