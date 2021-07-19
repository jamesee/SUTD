
let x ;
x = 100;

let y = true;
y = false;

let james = {
    "firstname": "james",
    "lastname" : "ee",
    "age": 18
}

console.log(x, y, james);

// ===================================== functions
function noSecondsinWeek (){
    return 60*60*24*7
}
console.log(`There are ${noSecondsinWeek()} seconds in a week`);

function numberOfSeconds (n){
    return 60*60*24*n
}
console.log(`There are ${numberOfSeconds(7)} seconds in a week`)

function numberOfSecondsPeriod (n, period){
    switch(period) {
        case "week":
        case "weeks":
            console.log("******** weeks ********");
            period = 7;
            break;
        case "month":
        case "months":
            console.log("******** months ********");
            period = 30;
            break;
        case "year":
        case "years":
            console.log("******** years ********");
            period = 365;
            break;
        default:
            console.log("******** days ********");
            period = 1;
    }
    return 60 * 60 * 24 * n * period;
}

const n = 2;
const period = "days"
console.log(`There are ${numberOfSecondsPeriod(n,period)} seconds in ${n} ${period}` )

// ===================================== functions expressions

function getRandomInt(min,max){
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);

    return Math.floor(Math.random() * (maxValue - minValue) + minValue);

}

getRandomInt1 = function (min,max){
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);

    return Math.floor(Math.random() * (maxValue - minValue) + minValue);

}

getRandomInt2 = (min,max) => {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);

    return Math.floor(Math.random() * (maxValue - minValue) + minValue);
}


//================================ compute (operation, a, b)

const compute  = (ops, a, b) => {

    if (isNaN(a) || isNaN(b)) return "a or b is NaN";

    if (ops === '+' || ops === 'add' ) {
        return Number(a)+ Number(b);
    }

    if (ops === '-' || ops === 'minus' ) {
        return Number(a) - Number(b);
    }
    if (ops === '*' || ops === 'multiply' ) {
        return Number(a) * Number(b);
    }
    if (ops === '/' || ops === 'divide' ) {
        if (Number(b) === 0) {
            return "infinity";
        } else {
            return Number(a) / Number(b);
        }       
    }
}

const compute1  = (ops, a, b) => {

    if (isNaN(a) || isNaN(b)) return "a or b is NaN";

    switch(ops){
        case "+":
        case "add":
            return Number(a)+ Number(b);
            break;
        case "-":    
        case "minus":
            return Number(a) - Number(b);
            break;
        case "*":
        case "multiply":
            return Number(a) * Number(b);
            break;
        case "/":
        case "divide":
            if (Number(b) === 0) return "infinity";
            return Number(a) / Number(b);
        default:
            return null;
    }
}

const compute2  = (ops, a, b) => {
    return  (isNaN(a) || isNaN(b)) ? "a or b is NaN":
            (ops === 'add'      || ops === "+") ? Number(a)+ Number(b) :
            (ops === 'minus'    || ops === "-") ? Number(a)- Number(b) :
            (ops === 'multiply' || ops === "*") ? Number(a) * Number(b):
            (ops === 'divide'   || ops === "/") && (Number(b) !== 0) ? Number(a) / Number(b) :
            'infinity';
}

console.log(`[NaN test] : ${compute2("/", "3", 'ab')}`);
console.log(`[b=0 test] : ${compute2("/", "3", 0)}`);
console.log(`["+" test] : ${compute2("+", "3", 6)}`);
console.log(`[add test] : ${compute2("add", "3", 6)}`);