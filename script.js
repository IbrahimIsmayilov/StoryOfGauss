// Story of Gauss by Ibrahim Ismayilov

// HTML Elements
let calcBtn = document.getElementById("calc-btn");
let sumOut = document.getElementById("sum-out");
let nIn = document.getElementById("n-in");
let nOut = document.getElementById("n-out");
// let result = document.getElementsByClassName('result');

// let input = nIn.value; Why wouldn't putting the .value before the function not work?

//   Add Event Listener
calcBtn.addEventListener("click", calcSum);

// Event Function
function calcSum() {
    let input = nIn.value;
    if (input < 1 || input > 200) {
        alert("Please enter a number b/t 1 and 200. Thank you!");
        // Why does this not work?
        // result.style.display = none;
    }
    // Sum of integers 1 to 100
    // let total = 0;
    // for (let n = 1; n <= input; n++) {
    //     total += n;
    let total = 100 * 101 / 2

        // Output the Total
    sumOut.innerHTML = total;
    nOut.innerHTML = input;
}