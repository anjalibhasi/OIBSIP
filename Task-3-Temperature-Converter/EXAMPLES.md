# 🎨 Temperature Converter - CSS & Workflow Examples

## CSS Variables System

### Complete Theme
```css
:root {
    /* Colors */
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --primary-light: #818cf8;
    --secondary: #ec4899;
    --success: #10b981;
    --warning: #f59e0b;
    --danger: #ef4444;

    /* Dark Theme */
    --bg-dark: #0f172a;
    --bg-darker: #020617;
    --bg-card: #1e293b;
    --bg-hover: #334155;

    /* Text */
    --text-primary: #f1f5f9;
    --text-secondary: #cbd5e1;
    --text-tertiary: #94a3b8;

    /* Borders & Shadows */
    --border-color: #334155;
    --border-light: #475569;
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);

    /* Spacing */
    --radius-sm: 0.5rem;
    --radius-md: 0.75rem;
    --radius-lg: 1rem;
    --radius-xl: 1.5rem;

    /* Animations */
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Component Examples

### 1. Converter Card
```html
<div class="converter-card">
    <div class="card-header">
        <div>
            <p class="card-label">TEMPERATURE</p>
            <h2>Converter</h2>
        </div>
        <div class="temperature-icon">
            <i class="fa-solid fa-temperature-high"></i>
        </div>
    </div>
    <!-- Rest of form... -->
</div>
```

**CSS Applied:**
```css
.converter-card {
    background: var(--bg-card);              /* Dark card background */
    border: 1px solid var(--border-color);  /* Subtle border */
    border-radius: var(--radius-xl);        /* Rounded corners */
    padding: 2.5rem;                         /* Internal spacing */
    box-shadow: var(--shadow-xl);           /* Depth effect */
    transition: var(--transition);          /* Smooth effect */
}

.converter-card:hover {
    border-color: var(--primary);           /* Highlight on hover */
    box-shadow: 0 20px 25px rgba(99, 102, 241, 0.2);
}
```

---

### 2. Input Styling
```html
<div class="input-wrapper">
    <input
        type="number"
        id="temperature"
        placeholder="0"
    >
    <span class="input-symbol">°</span>
</div>
```

**CSS Applied:**
```css
.input-wrapper input {
    width: 100%;
    padding: 1rem;
    background: var(--bg-dark);
    border: 2px solid var(--border-color);
    border-radius: var(--radius-lg);
    color: var(--text-primary);
    transition: var(--transition);
}

.input-wrapper input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.input-symbol {
    position: absolute;
    right: 1rem;
    color: var(--text-secondary);
    pointer-events: none;
}
```

---

### 3. Buttons

#### Convert Button
```css
.convert-button {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    border: none;
    border-radius: var(--radius-lg);
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}

.convert-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
}
```

#### Swap Button
```css
.swap-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    border: none;
    border-radius: var(--radius-lg);
    color: white;
    cursor: pointer;
    transition: var(--transition);
}

.swap-button:hover {
    transform: rotate(180deg) scale(1.05);
}
```

---

### 4. Result Display
```html
<div class="result-box" id="resultBox">
    <div class="result-top">
        <span>RESULT</span>
        <button class="copy-button" id="copyButton">
            <i class="fa-regular fa-copy"></i>
            <span>Copy</span>
        </button>
    </div>
    <div class="result-value">
        <span id="resultValue">212.00</span>
        <small id="resultUnit">°F</small>
    </div>
    <p id="resultDescription">💧 Boiling point of water</p>
</div>
```

**CSS Applied:**
```css
.result-box {
    background: linear-gradient(
        135deg,
        rgba(99, 102, 241, 0.1) 0%,
        rgba(236, 72, 153, 0.1) 100%
    );
    border: 1px solid var(--primary);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    min-height: 150px;
    animation: slideUp 0.5s ease-out;
}

.result-value span {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

---

### 5. Card Grid
```css
.quick-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.quick-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: 2rem;
    text-align: center;
    transition: var(--transition);
}

.quick-card:hover {
    transform: translateY(-8px);
    border-color: var(--primary);
    box-shadow: 0 20px 25px rgba(99, 102, 241, 0.1);
}

.quick-icon {
    width: 4rem;
    height: 4rem;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
    font-size: 1.75rem;
}
```

---

## Animation Keyframes

### Reveal Animation
```css
@keyframes revealIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.reveal {
    animation: revealIn 0.8s ease-out forwards;
}
```

### Float Animation (Background Orbs)
```css
@keyframes float {
    0%, 100% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(30px, -30px);
    }
}

.orb {
    animation: float 20s ease-in-out infinite;
}
```

### Pulse Animation (Live Dot)
```css
@keyframes pulse {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.2);
    }
}

.live-dot {
    animation: pulse 2s ease-in-out infinite;
}
```

### Slide Up Animation (Result)
```css
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
```

### Toast Notifications
```css
@keyframes slideToast {
    from {
        opacity: 0;
        transform: translateY(100px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideToastOut {
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(100px);
    }
}
```

---

## JavaScript Workflow Examples

### Complete Conversion Flow
```javascript
// 1. User enters temperature
temperatureInput.value = "100";

// 2. User clicks convert button
convertButton.click();

// 3. performConversion() is called
performConversion();
  │
  ├─ Get input value
  ├─ Validate temperature
  ├─ Get conversion function
  ├─ Perform calculation
  ├─ Update UI
  └─ Show result

// 4. Result displayed
// Result: 212.00 °F
// Description: "💧 Boiling point of water"
```

### Event Listeners Active
```javascript
// Input field
temperatureInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performConversion();
});

// Convert button
convertButton.addEventListener('click', performConversion);

// Swap button
swapButton.addEventListener('click', () => {
    [fromUnitSelect.value, toUnitSelect.value] = 
    [toUnitSelect.value, fromUnitSelect.value];
    if (temperatureInput.value.trim()) performConversion();
});

// Copy button
copyButton.addEventListener('click', async () => {
    const text = `${resultValue.textContent}${resultUnit.textContent}`;
    await navigator.clipboard.writeText(text);
    copyButton.classList.add('copied');
    setTimeout(() => copyButton.classList.remove('copied'), 2000);
});

// Clear button
clearButton.addEventListener('click', () => {
    temperatureInput.value = '';
    resultBox.style.display = 'none';
});
```

---

## Validation Examples

### Input Validation
```javascript
// Valid inputs
validateTemperature("100", "celsius")      → { valid: true }
validateTemperature("32", "fahrenheit")    → { valid: true }
validateTemperature("273.15", "kelvin")    → { valid: true }

// Invalid inputs
validateTemperature("abc", "celsius")      → { valid: false, error: "Please enter a valid number" }
validateTemperature("-300", "kelvin")      → { valid: false, error: "Kelvin cannot be less than 0 K" }
validateTemperature("-500", "celsius")     → { valid: false, error: "Temperature cannot be below absolute zero" }
```

### Conversion Examples
```javascript
// Celsius to Fahrenheit
getConversionFunction("celsius", "fahrenheit")(0)     → 32
getConversionFunction("celsius", "fahrenheit")(100)   → 212

// Fahrenheit to Celsius
getConversionFunction("fahrenheit", "celsius")(32)    → 0
getConversionFunction("fahrenheit", "celsius")(212)   → 100

// Kelvin conversions
getConversionFunction("kelvin", "celsius")(273.15)    → 0
getConversionFunction("celsius", "kelvin")(0)         → 273.15
```

### Temperature Descriptions
```javascript
getTemperatureDescription(-10, "celsius")   → "❄️ Freezing cold"
getTemperatureDescription(0, "celsius")     → "🧊 Freezing point of water"
getTemperatureDescription(20, "celsius")    → "🌤️ Cool and comfortable"
getTemperatureDescription(37, "celsius")    → "🌡️ Body temperature range"
getTemperatureDescription(100, "celsius")   → "💧 Boiling point of water"
getTemperatureDescription(150, "celsius")   → "🔥 Very hot"
```

---

## Responsive Grid Examples

### Desktop Layout (1200px+)
```css
.hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;      /* 2 columns */
    gap: 4rem;
}

.quick-grid {
    grid-template-columns: repeat(4, 1fr); /* 4 columns */
}

.steps {
    grid-template-columns: 1fr auto 1fr auto 1fr; /* 5 columns with lines */
}
```

### Tablet Layout (769px - 1199px)
```css
.hero-grid {
    grid-template-columns: 1fr 1fr;      /* Still 2 columns */
    gap: 2rem;                            /* Reduced gap */
}

.quick-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
}

.steps {
    grid-template-columns: 1fr;           /* Single column */
}
```

### Mobile Layout (<768px)
```css
.hero-grid {
    grid-template-columns: 1fr;           /* 1 column */
    gap: 2rem;
}

.quick-grid {
    grid-template-columns: 1fr;           /* 1 column */
}

.steps {
    grid-template-columns: 1fr;           /* 1 column */
}

.step-line {
    display: none;                        /* Hide connector lines */
}
```

---

## Typography Scale

### Fonts Used
```
Display Font: Space Grotesk (500, 600, 700)
Body Font: Inter (400, 500, 600, 700)
```

### Font Sizes
```
h1: 3.5rem (Desktop) / 2.5rem (Tablet) / 1.75rem (Mobile)
h2: 2rem / 1.5rem / 1.5rem
h3: 1.5rem / 1.25rem / 1rem

Body: 1rem / 0.9rem / 0.875rem
Small: 0.875rem / 0.85rem / 0.75rem
```

---

## CSS Gradient Examples

### Primary Gradient
```css
background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%);
```

### Secondary Gradient
```css
background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
```

### Success Gradient
```css
background: linear-gradient(135deg, #10b981 0%, #059669 100%);
```

### Text Gradient (for headings)
```css
background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## Error States

### Input Error
```html
<div class="input-group">
    <input type="number" id="temperature">
    <small id="inputError" class="error-message show">
        Please enter a valid temperature.
    </small>
</div>
```

```css
.error-message {
    display: none;
    color: var(--danger);      /* #ef4444 */
    font-size: 0.875rem;
    margin-top: 0.5rem;
}

.error-message.show {
    display: block;
}
```

### Input Focus Error State
```css
.input-wrapper input:focus {
    border-color: var(--danger);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
```

---

## Success States

### Copy Button Success
```css
.copy-button.copied {
    color: var(--success);              /* Green text */
    border-color: var(--success);       /* Green border */
    background: rgba(16, 185, 129, 0.1); /* Light green background */
}
```

### Result Box Animation
```css
#resultBox {
    animation: slideUp 0.5s ease-out;
    animation-fill-mode: forwards;
}
```

---

## Accessibility Features

### Focus States
```css
/* All interactive elements have visible focus */
button:focus,
input:focus,
select:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
}
```

### ARIA Labels
```html
<button id="swapButton" aria-label="Swap temperature units">
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
</button>

<button id="copyButton" aria-label="Copy result">
    <i class="fa-regular fa-copy"></i>
</button>
```

### High Contrast Dark Theme
```
Text: #f1f5f9 on #020617  ← High contrast ratio
Links: #6366f1 on #020617  ← Accessible blue
Borders: #334155 on #1e293b ← Visible separation
```

---

**All CSS and JavaScript working together for a seamless user experience! 🎉**
