let a = '4';
let b = 2;
let c = true;
let result;

// 1) Выполнить сложение различных типов(string+boolean, string+number, number+boolean)   

    console.log(a + c, a + b, b + c);
    
// 2) Выполнить умножение различных типов(string * boolean, string * number, number * boolean)

    console.log(a * c, a * b, b * c);

// 3) Выполнить деление различных типов(string/boolean, string/number, number/Boolean)  
 
    console.log(a / c, a / b, b / c);

// 4) Выполнить явное преобразование(number, string, boolean)

    result = Number('123');
    console.log(result); 

    result = String(123);
    console.log(result);

    result = Boolean(123);
    console.log(result);