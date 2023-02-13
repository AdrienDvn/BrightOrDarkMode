//select btn and span
let button = document.querySelector('#mode');
let span = document.querySelector('span');
let body = document.querySelector('body');


if (localStorage.getItem('mode')) {
   if (localStorage.getItem('mode') == 'dark') {
    darkMode();
   }
  };

function darkMode() {
  //add a dark mode to body element
   body.classList.add('dark');
   //or body.className ='dark';

   // change span text to 'bright mode'
   span.innerHTML = 'Bright mode';
   //define localstorage with an item;
    localStorage.setItem('mode', 'dark')
  };


button.addEventListener('click', ()=>{

  // console.log('btn click detected');
  let isDark = document.body.classList;

  if (isDark.contains('dark') ) {

    console.log('there is a dark class element');
    //delete all classes from the body element
    body.className = '';
    //change the span text to 'Bright mode'
    span.innerHTML = 'Dark mode';
    //or span.textContent = 'dark mode',

    //define a localStorage element with the value 'mode'
    localStorage.setItem('mode', 'bright')
  }
  else {
    console.log('there is NOT a dark class element');
    //call the darkMode() function
    darkMode();
  }
});


// if (localStorage.getItem('name')) {
//   document.body.append('Hello ' + localStorage.getItem('name'));
// }
// else {
//   let name = prompt('what is you name?')
//   localStorage.setItem('name', name);
//   document.body.append('Hello ' + name);
// }
//keep a memory file in the computer with the information given,

// localStorage.clear();
//clear the information
