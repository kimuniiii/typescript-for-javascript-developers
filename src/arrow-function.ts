export {};

/**
 * @概要 BMI（Body Mass Index）
 * @説明 身長と体重から肥満度を示すBMIを計算します
 * @param {number} height
 * @param {number} weight
 * @returns {number} 算術結果
 */

let bmi = (height : number , weight : number) => weight / (height * height);
console.log(bmi(1.78,86));