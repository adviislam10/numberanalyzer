// Number Analyzer

// HTML Elements
let numEl = document.getElementById('numInput');

// Add Event Listener
numEl.addEventListener('change', analyzeNumber);

// Event Function
function analyzeNumber() {
    // Get Number from Input Element
    let numInput = Number(numEl.value);

    // Analyze Number and display results
    document.getElementById('sign').innerHTML = getSign(numInput);
    document.getElementById('even-odd').innerHTML = evenOrOdd(numInput);
    document.getElementById('multiple').innerHTML = multipleOf10(numInput);
}

// Analyze Functions

function getSign(pos, neg, zero) {
        let number = numInput;

        if (number > 0) {
            return pos;
        } else if (number < 0) {
            return neg;
        } else {
            return zero
        }
        
    }
    