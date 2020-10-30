export {};

//! ============================
//! オプショナル（任意）な引数（?）
//! ============================

//? オプショナルな引数とは？
// 実引数がなくても問題なく動作する仮引数のこと

/**
 * @概要 BMI（ボディマス指数）
 * @説明 身長と体重から肥満度を示すBMIの計算結果を第三引数がtrueのときだけ出力する
 * @param {number} height 身長
 * @param {number} weight 体重
 * @param {boolean} printable 真偽値
 * @returns {number} 算術結果
 */

let bmi = (height: number, weight: number, printable?: boolean): number => {
  const bmi = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  } else {
    console.log('bmiは算術されない');
  }
  return bmi;
};

bmi(1.78, 86, true);
