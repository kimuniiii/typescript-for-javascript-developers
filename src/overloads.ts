export {};

//! ==============
//! オーバーロード
//! ==============

//? オーバーロードとは？
// 同じ名前の関数を複数定義すること
// 関数の実体の方では「型制約」を行わない

//? シグネチャとは？
// 関数の名前・引数の数や型・返り値の型などをひとまとめにした呼び方
// シグネチャで「型制約」を行う

//! シグネチャ（引数と返り値の「型」だけを定義）
function double(value : number) : number;
function double(value : string) : string

/**
 * @概要 オーバーロード
 * @説明 引数がnumber型なら2倍・引数がstring型なら結合させる関数
 * @param {*} value numberとstring
 * @returns {number} 2倍 {string} 結合
 */

function double(value : any) : any {
  console.log(typeof value);

  if (typeof value === 'number') {
    return value * 2;
  }

  if (typeof value === 'string') {
    return `${value} ${value};`
  }

}

console.log(double(100));
console.log(double('GO'));