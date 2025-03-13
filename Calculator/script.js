let string = "";
let memory = 0; // M+ and M- functionality
let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".btn");

// Function to update display
function updateDisplay() {                                                                                                                                                                                                                              
    display.value = string;
}

// Adding event listener to all buttons
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

        if (value === "=") {
            try {
                string = eval(string).toString(); // Evaluate the expression
            } catch {
                string = "Error"; // Handle invalid expressions
            }
        } 
        else if (value === "C") {
            string = ""; // Clear input
        } 
        else if (value === "M+") {
            memory += parseFloat(string) || 0; // Add to memory
        } 
        else if (value === "M-") {
            memory -= parseFloat(string) || 0; // Subtract from memory
        } 
        else if (value === "%") {
            string = (parseFloat(string) / 100).toString(); // Convert to percentage
        } 
        else {
            string += value; // Append button value to input
        }

        updateDisplay();
    });
});
