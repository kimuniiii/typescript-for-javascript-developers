export {};

//! ===========================
//! Rest Parameters（可変長引数）
//! ===========================

//? 書き方
// 仮引数の前に「...」（ピリオド3個）を付与する

//? 可変長引数の関数の動きとは？
// 渡された任意の個数の実引数を「配列」としてまとめて受け取る

//? 講義内容

/**
 * @概要 Array#reduceのコールバック関数
 * @説明 累積値と要素を引数に取り、累積値と要素の合計値を返す関数
 * @param {number} acc アキュムレーター
 * @param {number} cur 配列の要素
 * @return {number} 足し算の算術結果（1つの値）
 */

const reducer = (acc: number, cur: number) => {
  console.log({ acc: acc, cur: cur }); //TODO 省略記法（プロパティ名と値に指定する変数名が同じ場合は { name } のように省略して書ける）
  return acc + cur; //TODO Array#reduce関数の返り値は「アキュムレーター」に代入される
};

/**
 * @概要 可変長引数とArray#reduce
 * @説明 配列として受け取った引数をオブジェクトリテラルで出力する
 * @param {...number[]} values 可変長引数
 * @return {number} 算術結果（1つの値）
 */

const sum = (...values: number[]): number => {
  return values.reduce(reducer, 0);
};

console.log(sum(1, 2, 3, 4, 5));
