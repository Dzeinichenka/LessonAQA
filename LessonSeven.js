// 1) поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]

let arrayNumOne = [1, 2, 3, 4, 5];

function reverced(arrayNumOne){
    arrayNumOne.reverse();
    console.log(arrayNumOne);
}

reverced(arrayNumOne);

// 2) найти максимальное значение числа в массиве ([3,67,15...])

let arrayNumTwo = [3, 57, 15, 14, 45];

function maxElement(arrayNumTwo){
    let max = arrayNumTwo[0];
    for (let i = 0; i < arrayNumTwo.length; i++) {
        if (max < arrayNumTwo[i]) max = arrayNumTwo[i];
    }
    return max;

}

console.log(maxElement(arrayNumTwo));

// 3) записать в массив ряд фибаначи начиная с N члена с длинной массива M

function numFibonacci(number) {
    for (var fibonacci = [0, 1], i = 1; i < number; i++) 
      fibonacci.push(fibonacci[i] + fibonacci[i - 1])
  
    return fibonacci
  }
  
  console.log(numFibonacci(11));

//  4) даны 2 4-хзначных числа с неповторяющимися цифрами, 
// надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )

function countNumber(firstNumber, secondNumber){
    let qual = 0;
    let count = 0;
    for (let i = 0; i < firstNumber.length; i++){
        if(firstNumber[i] === secondNumber[i]){
            count++;
        }
        for (let j = 0; j < secondNumber.length; j++){
            if(firstNumber[i] === secondNumber[j]){
            qual++;
            }
        }
    }
    console.log(qual, count);
}

countNumber('3487', '3794')

// 5) сортировка массива по возрастанию/убыванию

 let arrayNumFour = [24, 45, 33, 12, 5];

function ascending(arrayNumFour){
    arrayNumFour.sort(function(a, b){return a - b});
    console.log(arrayNumFour);
}

ascending(arrayNumFour);


let arrayNumFive = [33, 57, 21, 47, 8];

function descending(arrayNumFive){
    arrayNumFive.sort(function(a, b){return b - a});
    console.log(arrayNumFive);
}

descending(arrayNumFive);

// 6) удалить из массива все повторяющиеся элементы

let arr = ["Chelsea", "Milan", "Chelsea", "Inter", "Barselona", "Barselona"];

function sortElement(arr){
    return arr.filter((value, index) => arr.indexOf(value) ===  index);
}

console.log(sortElement(arr));

