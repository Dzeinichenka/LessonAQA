// Домашнее задание №10

// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой
// от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью
// Promise.all получите массив результатов, найдите его сумму, выведите на экран.

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

    let promiseOne = new Promise((resolve, reject) => {
        let random = getRandom(1, 5);
        setTimeout(() => {
            console.log('PromiseOne =', random);
            resolve(random);           
        }, 1000)
    })

    let promiseTwo = new Promise((resolve, reject) => {
        let random = getRandom(1, 5);
        setTimeout(() => {
            console.log('PromiseTwo =', random);
            resolve(random);           
        }, 1000)
    })

    let promiseFree = new Promise((resolve, reject) => {
        let random = getRandom(1, 5);
        setTimeout(() => {  
            console.log('PromiseFree =', random);
            resolve(random);           
        }, 1000)
    })

Promise.all([promiseOne, promiseTwo, promiseFree]).then(value => {
    console.log('Sum =', value[0] + value[1] + value[2]);
})

// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой
// от 1 до 5 секунд. Пусть первый промис возвращает число 1, второй - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат
// его работы на экран.


let promise1 = new Promise((resolve, reject) => {
    let random = getRandom(1, 5);
    setTimeout(() => {
        resolve(1);         
    }, random * 1000)
})

let promise2 = new Promise((resolve, reject) => {
    let random = getRandom(1, 5);
    setTimeout(() => {
        resolve(2);          
    }, random * 1000)
})

let promise3 = new Promise((resolve, reject) => {
    let random = getRandom(1, 5);
    setTimeout(() => {
        resolve(3);           
    }, random * 1000)
})

Promise.race([promise1, promise2, promise3]).then(value => {
    console.log(value)
})


// Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет
// случайное число от 1 до 5. Создайте async функцию, которая с помощью await будет дожидаться
// результата getNum, затем возводить его в квадрат и выводить на экран.


function getNumOne() {
    return new Promise((resolve, reject) => {
        let random = getRandom(1, 5);
        setTimeout(() => {
            console.log(random);
            resolve(random);
        }, 3000)
    })
}

async function getNumSqrt() {
    let number = await getNumOne();
        console.log('Square of the number =', Math.pow(number, 2));
}

getNumSqrt();


// Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет
// случайное число от 1 до 5. Сделайте также функцию getNum2, которая возвращает промис, который
// с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, которая с
// помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2,
// а затем найдет сумму полученных чисел и выведет на экран.

function getNumTwo() {
        return new Promise((resolve, reject) => {
            let random = getRandom(6, 10);
            setTimeout(() => {
                console.log(random);
                resolve(random);
            }, 3000)
        })
    }

    async function getSumNumber() {
        let numberOne = await getNumOne();
        let numberTwo = await getNumTwo();
        console.log('Sum Number =', numberOne + numberTwo);
    }

getSumNumber();