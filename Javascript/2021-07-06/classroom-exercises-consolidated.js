console.log("##### Snippets of Classroom Exercise : Activity 2~7 #####");

// ========================== 2) quadratic_roots () ======================
function quadratic_roots(a, b, c) {
    console.log("**** Quadratic Root Exercise *****");

    let delta = b * b - 4 * a * c;
    let soln = [];
    console.log(`discriminant is ${delta}`)

    if (delta >= 0) {
        let x1 = (-b - delta ** 0.5) / 2 / a;
        let x2 = (-b + delta ** 0.5) / 2 / a;
        soln = [x1, x2];
        // console.log(soln);
    }

    return soln;
}

// ========================== 3) landingPoint () ======================
function landingPoint(a, theta) {
    console.log("***** Activity2 : Ballistics of an angry bird *****");

    const g = 9.81;
    //convert from degree to radian
    let b = theta / 180 * Math.PI;

    return (a ** 2) * Math.sin(2 * b) / g;
}

// ========================== 4) tax_payable () ======================
function tax_payable(x) {
    console.log("**** Tax Payable Exercise *****");
    return x < 20000 ? 0 : 0.05 * (x - 20000)
}

// ========================== 5) ask_user_age () ======================
function userInput() {
    let input = window.prompt("Please input your age (in integer) : ", "1");
    let arr = input.match(/[0-9]/g)
    let myreturn = (arr === null) ? null : arr.join('');
    return myreturn;
}

function ask_user_age() {
    console.log("***** User Age Exercise *****");
    let x = userInput();

    console.log(
        (x === null) ? "Input has to have at least one numberic" :
            (x <= 0) ? "Your age cannot be negative, it must be at least 1" :
                (x > 122) ? `I really doubt you are ${x} years old ... ` :
                    `Oh, you are ${x} years old ?That's cool !`
    )
}

// ========================== 6) collatz () ======================
function collatz(x) {
    console.log("**** Collatz or Syracuse Conjecture *****");

    console.log(x);
    let counter = 0;
    while (x > 1) {
        // if ( x % 2 == 0 ) {
        //     x = x / 2;
        // } else {
        //     x = 3 * x + 1;
        // }
        x = (x % 2 == 0) ? x / 2 : 3 * x + 1;
        console.log(x);
        counter++;
        if (counter > x) { break; }
    }

}

// ========================== 7) isPrime () ======================
function isPrime(x) {
    console.log("***** Prime Number Exercise *****");

    if (x == 1) { return false };
    if (x == 2) { return true };
    if (x % 2 == 0) { return false };

    for (let i = 2; i <= x ** (0.5); i += 2) {
        if (x % i == 0) { return false; }
    }
    return true;
}
// ========================== main () ======================

/*
// 2) Quadratic Roots exercise
console.log(quadratic_roots(2,-2,-24))
*/

/*
// 3) Activity2 : Ballistics of an angry bird
console.log(`The landing point will be ${landingPoint(30, 45).toFixed(2)} metres away.`)
*/

/*
// 4) Tax Payable exercise
let income = 30000;
console.log(`The tax payable on an income of ${income} dollars is ${tax_payable(income)}.`)
*/

/*
// 5) User Age exercise
ask_user_age()
*/


/*
// 6) Collatz or Syracuse Conjecture
collatz(10);
*/


// 7) prime number exercise
for (let i = 0; i < 100; i++) {
    console.log(`number ${i} is a prime number : ${isPrime(i)}`)
}


