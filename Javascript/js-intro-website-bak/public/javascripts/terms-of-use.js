/* EXERCISE: make each section collapsible */

// function makeSectionCollapsible(btnId, sectionId) {
//   // <button id="toggle-btn-0" class="px-2" aria-controls="section-0">
//   // <div id="section-0" class="py-3 text-justify">
//   // TODO: get button and the section
//   const btn = document.querySelector(`button[aria-controls=${sectionId}]`);
//   const mySection = document.querySelector(`#${sectionId}`);
//   // TODO: hide the section
//   mySection.classList.add('hidden');
//   // TODO: listen for click event on the button
//   btn.addEventListener('click', function onButtonClick(){
//     mySection.classList.toggle('hidden');
//   })
// }

// makeSectionCollapsible('toggle-btn-0', 'section-0');
// makeSectionCollapsible('toggle-btn-1', 'section-1');
// makeSectionCollapsible('toggle-btn-2', 'section-2');
// makeSectionCollapsible('toggle-btn-3', 'section-3');

const accordionBtns = Array.from(document.querySelectorAll('button[aria-controls=*]'));

accordionBtns.forEach(btns => {
  const sectionId = btns.getAttribute('aria-controls');
  const panel = document.querySelector(`#${sectionId}`);


  if(panel) {
    panel.classList.add('hidden');
    btn.addEventListener('click', ()=> panel.classList.toggle('hidden'));
  }
  
  
})