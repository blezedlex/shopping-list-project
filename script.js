/*
HTML IDs (from `index.html`):
- item-form - Form
- item-input - Input
- filter - Filter field
- item-list - Li
- clear - Clear button
*/
// Variables for all IDs
const form = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const list = document.getElementById('item-list'); // this is actually the ul
const clear = document.getElementById('clear');

//Function for the form and input value
const itemList = (e) => {
   e.preventDefault();
   let itemValue = itemInput.value;
   //alert for form validation
   if (itemValue === '') {
    alert('Please fill the form with your item');
    return;
   }
   //creating li, button, and i for the icon 'x'
   let li = document.createElement('li');
   let btn = document.createElement('button');
   let icon = document.createElement('i');

   //setting the class names for button and i
   btn.className = 'remove-item btn-link text-red';
   icon.className = 'fa-solid fa-xmark';

   //setting the value inside the li
   li.textContent = itemValue;

   //appending the new li, button, and icon
   list.appendChild(li);
   li.appendChild(btn);
   btn.appendChild(icon);

 
   //resetting form after every submission
   form.reset();
}

//Adding event listener on the form (important) - NOT on the text input field
form.addEventListener('submit', itemList);