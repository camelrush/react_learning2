/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let var2 = "let変数";
// console.log(var2);

// // letは上書きが可能
// var2 = "let変数を上書き";
// console.log(var2);

// // letは再宣言は不可
// let var2 = "let変数を再宣言";

// const var3 = "const変数";
// console.log(var3);

// var3 = "const変数を上書き";

// const var3 = "constを再宣言";

// const var4 = {
//   name: "object",
//   age: 58
// };
// console.log(var4);
// var4.age = 22;
// console.log(var4);

// const var5 = ["dog", "cat"];
// console.log(var5);
// var5[0] = "mouse";
// console.log(var5);
// var5.push("abc");

// /**
//  * テンプレート文字列
//  */
// const name = "しんや";
// const age = 45;

// // 「私の名前はしんやです。年齢は45歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列を用いる(バッククォートで括る)
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// /**
//  * アロー関数
//  */
// // 従来の関数
// // function func1(str) {
// //   return str;
// // }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// // アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です。"));

// // アロー関数(1stepならそのままかける)
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(3, 5));

// /**
//  * 分割代入
//  */
// const myProfile = {
//   name: "しんや",
//   age: 45
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です`;

// const myProfile = ["しんや", 45];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`;
// console.log(message3);
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message4);

// /**
//  * デフォルト値 変数に=で初期値を入れる
//  */
// const sayHello = (name = "ゲスト") => console.log(`こんにちわ！${name}さん`);
// sayHello("しんや");
// sayHello();

/**
 * スプレッド構文 ...で書くことで配列を順番に処理させる
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4)
// ;

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["髙田", "田中", "山田"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "髙田") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("1か2はtrueになります。");
// }
// if (flag1 && flag2) {
//   console.log("1か2もtrueになります。");
// }

// ||は左がtrueなら右を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左がtrueなら右を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
