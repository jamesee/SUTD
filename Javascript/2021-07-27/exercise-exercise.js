// //====================================== not done
// /* TODO: create a doubleItem function that accepts an array of number and 
// returns an array of equal length but with all of its item double  */
// doubleItem = (array)=>{
//     array.forEach((item)=> {
//         let newArray = []
//         console.log(item);
//         newArray.push(item+item)
//     })
//     console.log(array);
//   }

//   doubleItems([1,2,3, "4"])

// function doubleItems (array) {
//     const result =[];

//     for (const n of array) {
//         result.push(n*2)
//     }

//     return result;
// }
// console.log(doubleItems([1,2,3, 4]))


// //====================================== not done
//   /* TODO: create an invertSign function that accepts an array of number and 
// returns an array of equal length but with all of its item sign inverted */

// function invertSign (array) {
//     const result =[];

    
//     return result;
// }

// //====================================== done
// {
//     const participants = [
//       { name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
//       { name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
//       { name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
//       { name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
//     ];
  
//     // TODO: assign idNumber of all participants to idNumbers

   
//     const idNumbers = participants.map((p) => p.idNumber);
//     console.log(idNumbers); // ['S7282395H', 'T4689018Z', 'G5512873T', 'T8198514B']
// }
{



    const numbers = [3, -2, 1000, 201, 50, 100, 33, 50, -21];
  
    // TODO: get the results of multiplication of all the numbers using reduce method
    const sumOfMultiply1 = numbers.reduce((prevresult,item) => prevresult * item)
    console.log(sumOfMultiply1)

    // TODO: get the results of multiplication of all the numbers using for...of loop
    // const sumOfMultiply2 = (numbers) => {
    //     let sum = 1;
    //     for (const number in numbers){
    //         sum += sum * number;
    //     }
    //     return sum
    // }
    // console.log(sumOfMultiply2(numbers))

}
