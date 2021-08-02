/* eslint-disable */

function calculateTax() {
  alert('calculateTax is called');
  // DEMO: perform the tax calculation here

  // get salary, side income, and tax rate
  const salary = document.querySelector("#salary").value;
  const sideIncome = document.querySelector("#sideIncome").value;
  const taxRate = document.querySelector("#taxRate").value;

  // calculate tax amount
  let totalTax = (parseInt(salary) + parseInt(sideIncome)) * parseInt(taxRate) /100;
  // display result
  document.querySelector("#result").innerHTML = totalTax.toFixed(2);
}

function splitBill() {
  alert('splitBill is called');

  // TODO: get bill total and number of pax
  const billTotal = Number(document.querySelector("#billTotal").value);
  const pax = Number(document.querySelector("#pax").value);


  // TODO: calculate amount for each person
  let eachPerson = billTotal / pax;
  // console.log(`[DEBUG] ${eachPerson}`);
  
  // TODO: display the result
  document.querySelector('#result').innerText = `SG$ ${eachPerson.toFixed(2)}`;

}
