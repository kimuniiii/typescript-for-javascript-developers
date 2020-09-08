export {};

// 関数の型を付けるのは？
//「引数・戻り値」に型を付ける

function bmi(height : number , weight : number) : number {
  return weight / (height * height);
}

console.log(bmi(1.78,86));