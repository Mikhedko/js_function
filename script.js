/* Написать функцию, которая принимает 2 числа и возвра-щает -1, если первое меньше, чем второе; 1 – если первое ﻿больше, чем второе; и 0 – если числа равны. */

function analizeNumb(num1, num2){
    if (num1>num2){
        return 1;
    }
    if (num1 === num2){
        return 0;
    }
    else{
        return -1;
    }
}

console.log(analizeNumb(4,5));

/* Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры ﻿1, 4, 9 превратятся в число 149. */

function concateNumb(num1, num2, num3){
    return Number(String(num1)  + String(num2) + String(num3));
}

console.log(concateNumb(1,4,9), typeof(concateNumb(1,4,9)));

/* Написать функцию, которая принимает длину и ширину ﻿прямоугольника и вычисляет его площадь. Если в функцию ﻿передали 1 параметр, то она вычисляет площадь квадрата. */

function squareQP(a, b){
    if (!b){
        return a*a;
    } else{
        return a*b;
    }
}

console.log(squareQP(9));
console.log(squareQP(5,6));

/* Написать функцию, которая принимает время (часы, мину-ты, секунды) и выводит его на экран в формате «чч:мм:сс». 
 Если при вызове функции минуты и/или секунды не были ﻿переданы, то выводить их как 00. */

function timeOutput(hh, mm, ss){
    if ((!mm) && (!ss)){
        return console.log(`${hh}:00:00`);
    } else if(!ss){
        return console.log(`${hh}:${mm}:00`);
    } else if (!mm){
        return console.log(`${hh}:00:${ss}`);
    } else{
        console.log(`${hh}:${mm}:${ss}`);
    }
}
timeOutput(01,false,55);
timeOutput(5,56,false);
timeOutput(06);

/* Написать функцию, которая принимает часы, минуты и ﻿секунды и возвращает это время в секундах. */

function secondReturn(hh,mm,ss){
    return (hh*3600 + mm * 60 + ss)
}

console.log(secondReturn(02,10,10))

