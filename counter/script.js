// Selecting the minus button element using its ID
const MinusBtns = document.querySelector('#MinusBtn'); 

// Selecting the plus button element using its ID
const PlusBtn  = document.querySelector('#PlusBtn');  

// Selecting the element that displays the count value
const count = document.querySelector('.count');  

// Selecting the input field where the user enters the number to be added/subtracted
const inputs = document.querySelector('.input');  

// Selecting the reset button using its class name
const ResetBtns = document.querySelector('.ResetBtn');  

// Adding an event listener to the Plus button to increment the count
PlusBtn.addEventListener('click',()=>{
     // Converting the current count value from string to integer
     const countValue = parseInt(count.innerText);
     // Converting the input value from string to integer
     const input = parseInt(inputs.value);
     // Updating the count display by adding the input value
     count.innerText = countValue + input;
});

// Adding an event listener to the Minus button to decrement the count
MinusBtns.addEventListener('click',()=>{
     // Converting the current count value from string to integer
     const countValue = parseInt(count.innerText);
     // Converting the input value from string to integer
     const input = parseInt(inputs.value);
     // Updating the count display by subtracting the input value
     count.innerText = countValue - input;
});

// Adding an event listener to the Reset button to reset the count to zero
ResetBtns.addEventListener('click',()=>{
      count.innerText = 0; // Resetting the displayed count value to 0
});
