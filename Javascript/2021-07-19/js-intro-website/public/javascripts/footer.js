/* eslint-disable */

console.log('[DEBUG] getCurrentYear', helpers.getCurrentYear());
/* DEMO: show how to update current year */

// get the footer year element
const footerYearEl = document.querySelector("#footer-year")
// update the content of the year element to result of helpers.getCurrentYear
footerYearEl.innerHTML = `<i>hello world ${helpers.getCurrentYear()}</i>`;

console.log('[DEBUG] getCurrentDate', helpers.getCurrentDate());
/* EXERCISE: practice how to update current date */

// TODO: get the footer today element
const footerDateEl = document.querySelector("#footer-today");
// TODO: update the content of the today element to result of helpers.getCurrentDate
footerDateEl.innerHTML = helpers.getCurrentDate();
