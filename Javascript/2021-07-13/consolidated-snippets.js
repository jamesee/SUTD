console.log("##### Activities of Lesson on 2021-07-13 #####");

// ========================== activity 1 ======================
console.log("**** media(arr) *****");

function mysort_v2(val1, val2) {
    return  (val1 > val2)? 1:
            (val1 < val2)? -1 : 0;
}

function media(arr) {
    arr.sort(mysort_v2);
    console.log(arr);
    return (arr.length % 2 == 0)? 
            (arr[arr.length/2] + arr[arr.length/2 -1])/2 : arr[parseInt(arr.length/2)];
}

let a = [5,7,3,8,6]
let b = [5,7,3,8,6,9]

console.log(media(a))
console.log(media(b))


// ========================== activity 2 ======================
 console.log("**** middle_array(arr) *****");

// function middle_array(arr){
//     arr.shift()    
//     arr.pop()
//     return arr
// }

function middle_array(arr){
   
    return arr.slice( 1, arr.length -1)
}

let c = [1, 9]
let d = [1,9, 4]

console.log( middle_array(c))
console.log( middle_array(d))

// ========================== activity 3 ======================
console.log("**** sum_odd_numbers(arr) *****");

function positive_odd_numbers(item, idx, arr){
    return (item > 0 && item % 2 != 0)
}

function sum_odd_numbers(arr) {
    // reduce with initialvalue = 0     
    return  arr.filter(positive_odd_numbers).reduce((acc, val)=> acc + val, 0) ;
}


console.log(sum_odd_numbers([1,2,3]));
console.log(sum_odd_numbers([43,30,27,-3]));
console.log(sum_odd_numbers([40,30,20,-3]));

// ========================== activity 3 -1 ======================
// after doing some google research

console.log("**** sum_odd_numbers(arr) using arrow functions *****");

function sum_odd_numbers_v2(arr) {
    return  arr
            .filter((item) => {return item > 0 && item % 2 != 0})
            .reduce((acc, val)=> acc + val, 0) ;
}


console.log(sum_odd_numbers_v2([1,2,3]));
console.log(sum_odd_numbers_v2([43,30,27,-3]));
console.log(sum_odd_numbers_v2([40,30,20,-3]));

// ========================== activity 4 ======================
// My solution without google research
console.log("**** moving_average(arr) *****");

function aveArr(arr) {
    return arr.reduce((acc, val) => acc+val, 0)/arr.length;
}

function moving_average(arr){
    let tempArr = []
    let mv_ave = 3;
    
    if (!arr || arr.length < 3) return tempArr;
    
    for (let i = 0; i < arr.length - mv_ave +1 ; i++){
        tempArr.push(+aveArr(arr.slice(i, i+mv_ave)).toFixed(1));
    }
    return tempArr;
}

let data = [30.0, 20.0, 40.0, 50.0, 25.0, 70.0];

console.log(moving_average(data));

// ========================== activity 4 - 1 ======================
// After some google research
console.log("**** moving_average(arr)  *****");

function simpleMovingAverage(prices, window = 3) {
  if (!prices || prices.length < window) {
    return [];
  }

  let index = window - 1;
  const length = prices.length + 1;

  const simpleMovingAverages = [];

  while (++index < length) {
    const windowSlice = prices.slice(index - window, index);
    const sum = windowSlice.reduce((prev, curr) => prev + curr, 0);
    simpleMovingAverages.push(sum / window);
  }
  
  return simpleMovingAverages.map(x => +x.toFixed(1));
}


let data1 = [30.0, 20.0, 40.0, 50.0, 25.0, 70.0];

console.log(simpleMovingAverage(data1));

// ========================== activity 5 ======================
console.log("**** swap_element(arr, index1, index2) *****");


function swap_element(arr, idx1, idx2){
    let returnArr = Array.from(arr);
    
    if (idx1 >= arr.length  || idx2 >= arr.length) { return null };
    if (idx1 < 0  || idx2 < 0) { return null };
    returnArr[idx1] = arr[idx2];
    returnArr[idx2] = arr[idx1];
    
    return returnArr;
}

let arrA = [3,6,8,7];

let arrB = swap_element(arrA, 2,3);
console.log("arrayA : ", arrA)
console.log("arrayB : ", arrB)

let result = swap_element(arrA, 3,4);
console.log("arrayA : ", arrA)
console.log("result :", result)



// ========================== activity 6 ======================
// uncompleted
console.log("**** Exam Adjustments  *****");

let grades = [
    ["Student Name", "MidTerm Score", "FinalExam Score", "Average Score"],
    ["Chris", "60", "80", "70"],
    ["Oka", "50", "80", "65"],
    ["Norman", "40", "70", "55"],
    ["Natalie", "60", "70", "65"],
    ["Tony", "60", "90", "75"]
]

function grade_adjustment(grades){
    // deep copy of array
    const updated_grades = JSON.parse(JSON.stringify(grades));
    
    let newMidTerm_score;
    for (let i=1;  i < updated_grades.length; i++){
        // console.log("[DEBUG] current midterm grades ", updated_grades[i][1]);
        newMidTerm_score = updated_grades[i][1] * 1.5;
        updated_grades[i][1] = (newMidTerm_score > 100)? 100: newMidTerm_score.toString();
        // console.log("[DEBUG] new midterm grades ", updated_grades[i][1]);
    }
    
    return updated_grades;
}

console.log('Original Grades :', grades);
console.log('Adjusted Grades :',grade_adjustment(grades))



// ========================== activity 7 ======================
console.log("**** Activity #1: Fibonacci sequence  *****");

let fibonacci =(n) => {
    if (n == 0) {return 0};
    if (n == 1) {return 1};
    return fibonacci(n-1) + fibonacci(n-2);
}

let n = 8;
const fibonacciSeries =[];
for (let i = 0; i <= n; i++) fibonacciSeries.push(fibonacci(i));
console.log("fibonacciSeries ", fibonacciSeries);

// ========================== activity 8 ======================
console.log("**** Activity #2: McCarthy 91 function  *****");
// function mc91(n) {return (n >100)? n -10: mc91(mc91(n+11))}

function mccarthy(n) {
    if (n > 100) {return n-10};
    return mccarthy(mccarthy(n+11));
}

for (let k= -10; k < 110; k++){
    console.log(`${k} : ${mccarthy(k)}`)
}



// // ========================== activity 9 ======================
console.log("**** Activity #3: Euclide Algorithm for the GCD  *****");
/*
reference  https://www.freecodecamp.org/news/how-to-use-the-euclidean-algorithm-to-find-the-greatest-common-divisor-gcd/
Pseudo Code of the Algorithm:
Step 1: Let a, b be the two numbers
Step 2: a mod b = R
Step 3: Let a = b and b = R
Step 4: Repeat Steps 2 and 3 until a mod b is greater than 0
Step 5: GCD = b
Step 6: Finish
*/

function gcd(a, b) {
  if (b == 0)
    return a;
  else
    return gcd(b, (a % b));
}

console.log(gcd(30,50))

// ========================== activity 10 ======================
console.log("**** Activity #4: Towers of Hanoi  *****");
/*
reference : https://www.cs.cmu.edu/~cburch/survey/recurse/hanoiimpl.html

FUNCTION MoveTower(disk, source, dest, spare):
IF disk == 1, THEN:
    move disk from source to dest
ELSE:
    MoveTower(disk - 1, source, spare, dest)   // Step 1 above
    move disk from source to dest              // Step 2 above
    MoveTower(disk - 1, spare, dest, source)   // Step 3 above
END IF
*/

function showTowers(){
    console.log("==================")
    console.log("Tower A", towerA);
    console.log("Tower B", towerB);
    console.log("Tower C", towerC);
}

function towersInit(n){
    for (let i=n; i> 0; i--)
        towerA.push(i);
    showTowers();
}

function move_disks(disc_num, src, dest, aux){
    showTowers();
    console.log(`recursive : diskNumber ${disc_num}`);
    if (disc_num == 1){
        moveDisk(src,dest);
    } else {
        move_disks(disc_num -1, src, aux, dest);
        moveDisk(src,dest);
        move_disks(disc_num-1, aux, dest, src);
    }
    
}

function moveDisk(src, dest){
    dest.push(src.pop());
    showTowers();
    console.log("moveDisc");
}

const towerA = [], towerB = [], towerC=[];
const num_of_disks = 5;
const diskNumber = num_of_disks;


towersInit(num_of_disks);
move_disks(diskNumber, towerA, towerC, towerB);