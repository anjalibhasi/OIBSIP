/* ===================================================
   TEMPERATURE CONVERTER - JAVASCRIPT
=================================================== */

// DOM Elements
const temperatureInput = document.getElementById('temperature');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const convertButton = document.getElementById('convertButton');
const swapButton = document.getElementById('swapButton');
const clearButton = document.getElementById('clearButton');
const copyButton = document.getElementById('copyButton');
const resultBox = document.getElementById('resultBox');
const resultValue = document.getElementById('resultValue');
const resultUnit = document.getElementById('resultUnit');
const resultDescription = document.getElementById('resultDescription');
const inputError = document.getElementById('inputError');

// ===================================================
//   TEMPERATURE CONVERSION LOGIC
// ===================================================

// Conversion object containing all conversion formulas
const conversions = {
    // Celsius conversions
    celsiusToFahrenheit: (c) => (c * 9) / 5 + 32,
    celsiusToKelvin: (c) => c + 273.15,

    // Fahrenheit conversions
    fahrenheitToCelsius: (f) => ((f - 32) * 5) / 9,
    fahrenheitToKelvin: (f) => ((f - 32) * 5) / 9 + 273.15,

    // Kelvin conversions
    kelvinToCelsius: (k) => k - 273.15,
    kelvinToFahrenheit: (k) => ((k - 273.15) * 9) / 5 + 32,
};

// Function to get conversion function based on units
function getConversionFunction(fromUnit, toUnit) {
    if (fromUnit === toUnit) {
        return (value) => value;
    }

    const key = `${fromUnit}To${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
    return conversions[key] || null;
}

// Function to validate temperature input
function validateTemperature(value, unit) {
    const temp = parseFloat(value);

    // Check if value is a valid number
    if (isNaN(temp)) {
        return { valid: false, error: 'Please enter a valid number.' };
    }

    // Check temperature constraints
    if (unit === 'kelvin') {
        if (temp < 0) {
            return { valid: false, error: 'Kelvin cannot be less than 0 K.' };
        }
    }

    // Add warning for extreme temperatures
    if (temp < -273.15 && unit === 'celsius') {
        return { valid: false, error: 'Temperature cannot be below absolute zero (-273.15°C).' };
    }

    if (temp < -459.67 && unit === 'fahrenheit') {
        return { valid: false, error: 'Temperature cannot be below absolute zero (-459.67°F).' };
    }

    return { valid: true };
}

// Function to get unit symbol
function getUnitSymbol(unit) {
    const symbols = {
        celsius: '°C',
        fahrenheit: '°F',
        kelvin: 'K',
    };
    return symbols[unit] || '';
}

// Function to get temperature description
function getTemperatureDescription(value, unit) {
    // Convert to Celsius for comparison
    let celsius = value;
    if (unit === 'fahrenheit') {
        celsius = (value - 32) * (5 / 9);
    } else if (unit === 'kelvin') {
        celsius = value - 273.15;
    }

    // Return description based on temperature
    if (celsius < 0) {
        return '❄️ Freezing cold';
    } else if (celsius === 0) {
        return '🧊 Freezing point of water';
    } else if (celsius > 0 && celsius < 25) {
        return '🌤️ Cool and comfortable';
    } else if (celsius >= 25 && celsius < 37) {
        return '☀️ Warm and pleasant';
    } else if (celsius >= 37 && celsius < 40) {
        return '🌡️ Body temperature range';
    } else if (celsius >= 40 && celsius < 100) {
        return '🔥 Very hot';
    } else if (celsius === 100) {
        return '💧 Boiling point of water';
    } else {
        return '🌋 Extremely hot';
    }
}

// ===================================================
//   MAIN CONVERSION FUNCTION
// ===================================================

function performConversion() {
    // Get input values
    const inputValue = temperatureInput.value.trim();
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;

    // Clear previous error
    inputError.classList.remove('show');

    // Validate input
    if (inputValue === '') {
        inputError.textContent = 'Please enter a temperature value.';
        inputError.classList.add('show');
        resultBox.style.display = 'none';
        return;
    }

    const validation = validateTemperature(inputValue, fromUnit);
    if (!validation.valid) {
        inputError.textContent = validation.error;
        inputError.classList.add('show');
        resultBox.style.display = 'none';
        return;
    }

    // Get conversion function
    const conversionFunc = getConversionFunction(fromUnit, toUnit);
    if (!conversionFunc) {
        inputError.textContent = 'Conversion not available.';
        inputError.classList.add('show');
        return;
    }

    // Perform conversion
    const inputNum = parseFloat(inputValue);
    const result = conversionFunc(inputNum);

    // Round to 2 decimal places
    const roundedResult = Math.round(result * 100) / 100;

    // Update result display
    resultValue.textContent = roundedResult.toFixed(2);
    resultUnit.textContent = getUnitSymbol(toUnit);
    resultDescription.textContent = getTemperatureDescription(roundedResult, toUnit);

    // Show result box with animation
    resultBox.style.display = 'flex';
    resultBox.style.animation = 'none';
    setTimeout(() => {
        resultBox.style.animation = 'slideUp 0.5s ease-out';
    }, 10);
}

// ===================================================
//   EVENT LISTENERS
// ===================================================

// Convert on button click
convertButton.addEventListener('click', performConversion);

// Convert on Enter key press
temperatureInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performConversion();
    }
});

// Swap units
swapButton.addEventListener('click', () => {
    const temp = fromUnitSelect.value;
    fromUnitSelect.value = toUnitSelect.value;
    toUnitSelect.value = temp;

    // Perform conversion if input exists
    if (temperatureInput.value.trim()) {
        performConversion();
    }
});

// Clear all
clearButton.addEventListener('click', () => {
    temperatureInput.value = '';
    fromUnitSelect.value = 'celsius';
    toUnitSelect.value = 'fahrenheit';
    resultBox.style.display = 'none';
    inputError.classList.remove('show');
    copyButton.classList.remove('copied');
    copyButton.innerHTML = '<i class="fa-regular fa-copy"></i><span>Copy</span>';
});

// Copy result to clipboard
copyButton.addEventListener('click', async () => {
    const textToCopy = `${resultValue.textContent}${resultUnit.textContent}`;

    try {
        await navigator.clipboard.writeText(textToCopy);

        // Visual feedback
        copyButton.classList.add('copied');
        copyButton.innerHTML = '<i class="fa-solid fa-check"></i><span>Copied!</span>';

        // Reset after 2 seconds
        setTimeout(() => {
            copyButton.classList.remove('copied');
            copyButton.innerHTML = '<i class="fa-regular fa-copy"></i><span>Copy</span>';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
    }
});

// Real-time conversion on input change
temperatureInput.addEventListener('input', () => {
    if (temperatureInput.value.trim()) {
        // Optional: Enable real-time conversion
        // Uncomment to enable live conversion
        // performConversion();
    }
});

// ===================================================
//   ANIMATIONS
// ===================================================

// Add slide-up animation for result box
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ===================================================
//   SMOOTH SCROLL FOR NAVIGATION LINKS
// ===================================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// ===================================================
//   INITIALIZATION
// ===================================================

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Set initial focus to input when page loads
window.addEventListener('load', () => {
    temperatureInput.focus();

    // Hide result box initially
    resultBox.style.display = 'none';
});
