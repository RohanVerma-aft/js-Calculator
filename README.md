# 🧮 JavaScript Calculator

A calculator built from scratch using **HTML, CSS, and Vanilla JavaScript**.

I created this project while learning JavaScript DOM manipulation and event handling. Instead of using JavaScript's built-in `eval()` function, the calculator parses and evaluates mathematical expressions using custom logic.

The project also experiments with dynamic DOM elements and CSS animations by creating falling result blocks whenever a calculation is completed.

---

## ✨ Features

- ➕ Addition
- ➖ Subtraction
- ✖️ Multiplication
- ➗ Division
- 🔢 Decimal number support
- 🧠 Custom expression evaluation without `eval()`
- ⚡ Operator precedence handling
- ⌨️ Keyboard input support
- 🧹 Clear calculator display
- 🗑️ Clear generated answer blocks
- 📦 Dynamically generated result blocks
- 🎬 Falling block animations using CSS
- ⚠️ Error handling for invalid calculations

---

## 🛠️ Built With

- **HTML5** for the calculator structure
- **CSS3** for styling, layout, and animations
- **Vanilla JavaScript** for calculator logic and DOM manipulation

No frameworks or external JavaScript libraries are used.

---

## 🧠 What I Learned

This project helped me practice several important JavaScript and DOM concepts:

### DOM Manipulation

```javascript
document.querySelector()
document.querySelectorAll()
document.createElement()
appendChild()
classList.add()
```

### Event Handling

```javascript
addEventListener("click")
addEventListener("keydown")
```

I also learned how to connect physical keyboard inputs with buttons on the calculator.

### Expression Parsing

Instead of using:

```javascript
eval(expression)
```

the calculator separates numbers and operators and processes the expression using custom JavaScript logic.

This helped me understand how arithmetic expressions can be handled internally rather than relying entirely on built-in evaluation.

### Dynamic Elements

Every completed calculation can generate a new result block using:

```javascript
document.createElement("div")
```

The block is then inserted into the page dynamically.

### CSS Animations

The generated answer blocks use CSS `@keyframes` and positioning to create a falling-block effect.

---

## ⌨️ Keyboard Controls

The calculator can also be controlled using the keyboard.

| Key | Action |
| --- | --- |
| `0-9` | Enter numbers |
| `+ - * /` | Operators |
| `.` | Decimal point |
| `Enter` | Calculate |
| `Backspace` | Delete input |
| `Escape` | Clear display |

---

## 📂 Project Structure

```text
js-Calculator/
│
├── index.html
├── style.css
├── script2.js
├── LICENSE
└── README.md
```

### File Responsibilities

**`index.html`**

Contains the structure of the calculator including the display, number buttons, operators, and control buttons.

**`style.css`**

Contains the calculator design, button layout, Grid/Flexbox styling, result blocks, and animations.

**`script2.js`**

Contains the calculator logic including:

- Button event handling
- Keyboard controls
- Expression parsing
- Arithmetic calculations
- Error handling
- Dynamic result-block creation

---

## 🚀 Live Demo

The calculator can be deployed using **GitHub Pages**.

**Live Demo:**  
`https://github.com/RohanVerma-aft/js-Calculator/`

> Replace `RohanVerma-aft` with your GitHub username after enabling GitHub Pages.

---

## 🔮 Future Improvements

Some features I may add as I continue learning:

- Better falling-block collision detection
- Stack result blocks on top of each other
- Improved responsive design
- Better handling of negative numbers
- Calculation history
- More advanced mathematical operations

---

## 📚 Purpose of This Project

This project is part of my journey learning web development from the fundamentals.

The main goal was not simply to create a working calculator, but to understand the concepts behind it by implementing the logic myself.

It gave me hands-on practice with:

**HTML → CSS → JavaScript → DOM → Events → Dynamic Elements → Animations**

---

## 📄 License

This project is licensed under the **MIT License**.
