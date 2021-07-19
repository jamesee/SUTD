const errorCheck = (mystr, myvar) => {

  // console.log(`[DEBUG]  integer check : ${Number.isInteger(Number(myvar))}`);
  return  (isNaN(myvar)) ?  `[ERROR] ${mystr} input field must be a number.`:
          (!myvar) ? `[ERROR] ${mystr} input field cannot be empty.` :
          (Number(myvar) < 0) ? `[ERROR] ${mystr} input field cannot be negative.` :
          (Number(myvar) === 0 && mystr === "Pax") ? `[ERROR] ${mystr} input field cannot be zero.` :
          (!Number.isInteger(Number(myvar)) && mystr === "Pax") ? `[ERROR] ${mystr} input field must be an integer.` :
          false;
}

const displayResult = (number) => {return `SGD ${Number(number).toFixed(2)}`};

function splitBill() {

  const billTotal = document.querySelector('#billTotal').value;
  const pax = document.querySelector('#pax').value;
  const errorAlert = document.querySelector('#errorAlert');
  const errorMsg = document.querySelector('#errorMsg');
  
  let myBillErrorCheck = errorCheck('Bill total', billTotal);
  let myPaxErrorCheck = errorCheck('Pax', pax);

  //init errorMsg
  errorMsg.innerHTML = '';
 
  if (!!myBillErrorCheck) errorMsg.innerHTML += `${myBillErrorCheck}<br>`;
  if (!!myPaxErrorCheck) errorMsg.innerHTML += `${myPaxErrorCheck}<br>`;
  if (!!myBillErrorCheck || !! myPaxErrorCheck) {
    errorAlert.classList.remove('hidden');
    document.querySelector('#result').innerHTML = displayResult (0);
    return;
  } 

  // TODO: clear previous error message
  errorAlert.classList.add('hidden');

  const amountPerPax = Number(billTotal) / Number(pax);
  document.querySelector('#result').innerHTML = displayResult(amountPerPax);

}

document.querySelector('#splitBtn').addEventListener('click', splitBill);
