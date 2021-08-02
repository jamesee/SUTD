function calculateTax() {
  // DEMO: perform validation

  // hide previous error

  const salary = document.querySelector('#salary').value;
  const sideIncome = document.querySelector('#sideIncome').value;
  const taxRate = document.querySelector('#taxRate').value;

  // check salary is not empty
  if (!salary){
    document.querySelector('#errorAlert').classList.remove('hidden');
    document.querySelector('#errorMsg').innerHTML = 'Salary must not be empty';
    return;
  }
  // check salary is not negative
  if (salary < 0){
    document.querySelector('#errorAlert').classList.remove('hidden');
    document.querySelector('#errorMsg').innerHTML = 'Side-Income must not be negative';
    return;
  }
  // check side income is not negative if provided
  if (!sideIncome || sideIncome < 0) {
    document.querySelector('#errorAlert').classList.remove('hidden');
    document.querySelector('#errorMsg').innerHTML = 'Salary must not be negative';
    return;
  }
  // check tax rate is not empty
  if (!taxRate){
    document.querySelector('#errorAlert').classList.remove('hidden');
    document.querySelector('#errorMsg').innerHTML = 'Tax rate must not be empty';
    return;
  }
  // check tax rate is not negative
  if (taxRate < 0){
    document.querySelector('#errorAlert').classList.remove('hidden');
    document.querySelector('#errorMsg').innerHTML = 'Tax rate must not be empty';
    return;
  }
  
  const total = ((Number(salary) + Number(sideIncome)) * Number(taxRate)) / 100;

  document.querySelector('#result').innerHTML = total.toFixed(2);
}

document.querySelector('#calculateBtn').addEventListener('click', calculateTax);
