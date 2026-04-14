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
const filter = document.getElementById('filter');

//Function for the form and input value
const itemList = (e) => {
   e.preventDefault();
   // removes extra spaces; prevents whitespace-only items like "   "
   const itemValue = itemInput.value.trim(); 
   //alert for form validation
   if (itemValue === '') {
    alert('Please fill the form with your item');
    return;
   }
   //creating li, button, and i for the icon 'x'
   // Use `const` (not `let`) because we never reassign these variables—
   // we only modify the elements (e.g., set classes, append them).
   //  This prevents accidental reassignment.
   const li = document.createElement('li');
   const btn = document.createElement('button');
   const icon = document.createElement('i');

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

//Removing all the items. Important thing here - 
// instead of using .remove() just set the innerHTML blank so the ul still remains
const removeAll = (e) => {
    list.innerHTML = '';
}

//Removing via the 'x' icon
const removeItem = (e) => {
     const removeBtn = e.target.closest('button.remove-item');
     if (!removeBtn) return;

     const item = removeBtn.closest('li');
     if (!item) return;

     item.remove();
}

//Adding event listener on the form (important) - NOT on the text input field
form.addEventListener('submit', itemList);
clear.addEventListener('click', removeAll);
list.addEventListener('click', removeItem);   