export {};

/**
 * 肥満度を表す体格指数であるBMIを求めるアロー関数式
 *
 * @param {number} height
 * @param {number} weight
 * @return {number} 算術結果
 */

let bmi = (height: number, weight: number) => weight / (height * height);
console.log(bmi(1.78, 86));

const bmi2 = (height: number, weight: number): number => {
  return weight / (height * height);
};
console.log(bmi2(1, 2));
