/* eslint-disable */

/* TODO: create a doubleItem function that accepts an array of number and 
returns an array of equal length but with all of its item double  */
// doubleItem = (array)=>{
//   array.forEach((item)=> 
//     console.log(item);
//   )
// }
/* TODO: create an invertSign function that accepts an array of number and 
returns an array of equal length but with all of its item sign inverted */

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
  const participants = [
    { name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
    { name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
    { name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
    { name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
  ];

  // TODO: assign idNumber of all participants to idNumbers
  const idNumbers = participants.map((p) => p.idNumber)

  
  // console.log(idNumbers); // ['S7282395H', 'T4689018Z', 'G5512873T', 'T8198514B']


/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
{
  const numbers = [3, -2, 1000, 201, 50, 100, 33, 50, -21];

  // TODO: get the results of multiplication of all the numbers using reduce method
  const sumOfMultiply1 = numbers.reduce((prevresult,item) => prevresult * item, 1)
  // console.log(sumOfMultiply1)

  // TODO: get the results of multiplication of all the numbers using for...of loop
  // function sumOfMultiply2 (array){
  //       let sum = 1;
  //       for (const item in array){
  //           sum += sum * item;
  //       }
       
  //   }
  //   console.log(sumOfMultiply2(numbers));
}

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/
// {
//   const numbers = [3, -2, 1000, 201, 50, 100, 33, 50, -21];

//   // TODO: get all the positive numbers (above or equal to 0)
//   const positiveNumber = numbers.filter(item => item >= 0)
//   console.log(positiveNumber)

//   // TODO: get all the odd numbers
//   const oddNumber = numbers.filter(item => item % 2 != 0)
//   console.log(oddNumber)

//   // TODO: get all the numbers that is larger before the number before it
//   // (exclude first number)
//   const greaterThanPrev = numbers.filter((num,index, allNumbers) => index > 0 && numbers[index] > allNumbers[index-1])
//   // map((item, index) => console.log(item,index))
//   console.log(greaterThanPrev)
// }

/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/

{
  const participants = [
    { name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
    { name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
    { name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
    { name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
  ];

  // TODO: get the names for all participants
  const allNames = participants.map((p) => p.name)
  console.log(allNames)

  // TODO: get the id numbers for female participants only
  const femaleId = participants.filter(p => p.gender === 'female').map(p => p.idNumber)
  console.log(femaleId)
}
