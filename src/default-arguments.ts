export {};

//! =============
//! デフォルト引数
//! =============

// デフォルト引数を宣言するためには？
//「仮引数 = デフォルト値」の形式で「仮引数」を宣言するだけ

// デフォルト値が適用されるのは？
//「引数が明示的に渡されなかったとき・undefinedを明示的に渡した時」だけ

/**
 * @概要 来年の給料
 * @説明 今年の給料に消費税を掛けて来年の給料を求める関数
 * @param {number} [currentSalary=1000] 今年
 * @param {number} [taxRate=1.1] 消費税
 * @returns {number} 算術結果
 */

const nextYearSalary = (currentSalary: number = 1000, taxRate: number = 1.1) => {
  return currentSalary * taxRate;
}

console.log(nextYearSalary(5, undefined));