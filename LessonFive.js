// Первеое задание
// Эмулировать игру в кубики, 2 человека по очереди бросают кубик, 
// каждый в итоге по 3 раза. У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.

let playerOneSum = 0;
let playerTwoSum = 0;
let sumScorePlayerOne = 0;
let sumScorePlayerTwo = 0;

for (let i = 0; i < 3; i++) {

	playerOneSum = Math.floor(Math.random() * 6) + 1;
	playerTwoSum = Math.floor(Math.random() * 6) + 1;
	sumScorePlayerOne += playerOneSum;
	sumScorePlayerTwo += playerTwoSum;
				
console.log(`First player score is ${playerOneSum}`);
console.log(`Second player score is ${playerTwoSum}`);
console.log(`Score player one is ${sumScorePlayerOne}`);
console.log(`Score player two is ${sumScorePlayerTwo}`);

if (sumScorePlayerOne > sumScorePlayerTwo){
	console.log('Player one - Win!')
} else if (sumScorePlayerOne < sumScorePlayerTwo)
	console.log('Player two - Win!')
  else if (sumScorePlayerOne == sumScorePlayerTwo)
 console.log('Draw!')
}

// Второе задание 
// Подсчитать как много пятниц 13-го было с 01/01/2000 до сегодня.

// let result = 0;
// for (let startDate = new Date("2000-01-01"), now = new Date(); startDate <= now; startDate.setDate(startDate.getDate() + 1)) {
//   if(startDate.getDate() === 13 && startDate.getDay() === 5){
//     result++
//   }
// }
// console.log(result);

// Третье задание
// Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу. 
// Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5)
// а) числа изначальное число целое, числа разбивки - целые (4,6,5)
// б) числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)

// a)

// let number = 30;
// let iterations = 3;
// let parts = [];
// let remainder = number;

// for (let i = 1; i <= iterations; i++) {
    
//     if (i === iterations) {
//         parts.push(remainder);
//         break;
//     }

//     const part = Math.round(Math.random() * remainder);
    
//     parts.push(part);
//     remainder -= part;

//     parts.reduce((sum, value) => sum + value, 0);
// }

// console.log(parts);

// б)

// let number = 30;
// let a = number;
// let parts = 4;
// let randomSumm = 0;
// let partsArray = [];

//   for (let i = 1; i < parts; i++) {
//     let rand = Number((Math.random() * a).toFixed(2));
//     partsArray.push(rand);
//     randomSumm += rand;
//     a = a - rand;
//   }
// console.log(partsArray);

