// 1. Замыканием сделайте функцию, которая считает и выводит количество своих вызовов.

function getCountingCall(){
    let count = 1;
    return function() {
        console.log(count);
        return count++;
    }
    
}
let counterOne  = getCountingCall();
counterOne();
counterOne();
counterOne();

// 2. Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, 
// чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка. 
// Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.

function getArray() {
    let arrayOne = [];
    let min = 1;
    let max = 100;
        return function getRandomNumber() {
            let random = Math.floor(Math.random() * (max - min + min) + min);
            if(!arrayOne.includes(random)) {
                arrayOne.push(random);
            }
            if(arrayOne.length < max) {
                getRandomNumber();
            }
            return arrayOne;
        }        
}
let number = getArray();
console.log(number());

// 3. Дан массив с числами [1, -2, 3, 0, 4, -5, 6, -11]. Оставьте в нем только положительные числа. Затем извлеките квадратный корень и этих чисел

function getArrayTwo(){
    let arrayTwo = [-1, 2, -3, 4, -5, 6];
    let positiveArrayTwo = [];
    
        positiveArrayTwo = arrayTwo.filter(function(x) { 
            return x > -1;
        });

        positiveArrayTwo = positiveArrayTwo.map(function(x) {
            return Math.sqrt(x)
        });

        console.log((positiveArrayTwo));
}

getArrayTwo();


// 4. Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.

let arrayThree = [45, 366, 70, 1, 2, 15, 48, 100];

function inputNumbers() {
    let recursiveFunction = function(array){
        if(array.length > 0){
            console.log(array.slice(0))
        }
    }
    recursiveFunction(arrayThree);
}

inputNumbers();

// 5. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Использовать рекурсию.
// Максимум 9

function getSumNumber(number){
    let sum = number. toString(). split(''). reduce((acc, next) => {
        return +acc + +next;
    });
    if (sum > 9) {
        return getSumNumber(sum);
    }
    return sum;
}

console.log(getSumNumber(1454327));
