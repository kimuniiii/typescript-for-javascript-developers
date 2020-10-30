export {};

// 関数の型を付けるのは？
//「引数・戻り値」に型を付ける

/**
 * 肥満度を表す体格指数であるBMIを求める関数宣言文
 *
 * @param {number} height
 * @param {number} weight
 * @return {number} bmi数値
 */

function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.78, 86));
