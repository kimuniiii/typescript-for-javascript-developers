export {};

/**
 * 肥満度を表す体格指数であるBMIを求める無名関数（式）
 *
 * @param {number} height
 * @param {number} weight
 * @return {number} bmi数値
 */

const bmi: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

console.log(bmi(1.78, 86));
