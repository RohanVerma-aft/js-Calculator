const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");
const clearButton = document.querySelector(".extra-buttons ");
const answer = document.querySelector(".answer");
let no_operations =0;
let flag =0;

function createAnswerBox(result){
    const box = document.createElement("div");
    const random_x = Math.random() * (window.innerWidth - box.offsetWidth);
    box.style.left = random_x + "px";
    box.classList.add("answer-box");
    if(result === "Math Error" || result === "Error"){
        const img = document.createElement("img");
        img.classList.add("error-image");
        img.src = "https://cdn-icons-png.flaticon.com/256/4201/4201973.png";
        box.appendChild(img);
    }
        else{
            box.textContent = result;
            }
    answer.appendChild(box);
}

function calc(expression) {
// console.log("CALC FUNCTION RUNNING:", expression);
    if (expression.endsWith("="))
        expression = expression.slice(0, -1);

    let operators = ['/', '*', '+', '-'];

    let parts = expression.split(/([+\-*/])/);

    for (let i = 0; i < operators.length; i++) {

        let op = operators[i];

        while (parts.includes(op)) {
            // console.log("BEFORE:", parts);
            no_operations++;
            let index = parts.indexOf(op);

            let left = parseFloat(parts[index - 1]);
            let right = parseFloat(parts[index + 1]);

            let result;

            switch (op) {

                case '+':
                    result = left + right;
                    break;

                case '-':
                    result = left - right;
                    break;

                case '*':
                    result = left * right;
                    break;

                case '/':
                    if (right === 0) return "Math Error";
                    result = left / right;
                    break;
            }

            parts.splice(index - 1, 3, result.toString());
        }
    }

    return parts[0];
}
let btncount =0;
buttons.forEach(function(button){
    button.addEventListener("click", function(){
        const btn = button.textContent;
        
        if(flag===0){
            if(btn === "=") return;
            display.textContent = btn;
            flag = 1;
            return;
        }
        if(btn === "."){
            let parts=display.textContent.split(/([+\-*/])/);
            let currentPart =parts[parts.length-1];
            if(currentPart.includes(".")) return;
        }

        if( btn === "="){
            const expression = display.textContent;
            const result = calc(expression);
            display.textContent = result;
            if(no_operations > 0) 
                createAnswerBox(result);
            flag = 0;
            no_operations = 0;
            return;
        }
        display.textContent += btn;
    })
})


clearButton.addEventListener("click", function() {
    btn = event.target.textContent;
    if(btn==='C'){
        display.textContent = "0";
        flag = 0;

    }
    if(btn==='Clear Blocks !'){
        answer.innerHTML = "";
    }

});


document.addEventListener("keydown", function(event) {

    if(event.key === "Enter" || event.key === "="){
        const expression = display.textContent;
        const result = calc(expression);
        display.textContent = result;
        if(no_operations > 0) 
            createAnswerBox(result);
        flag = 0;
        no_operations = 0;
        return;
    }
    
    if(event.key === "Escape"){
        display.textContent = "0";
        flag = 0;
        answer.innerHTML = "";
        return;
    }
    
    if(event.key === "Backspace"){
        if(display.textContent.length === 1){
            display.textContent = "0";
            flag = 0;
        }
        else{
            display.textContent = display.textContent.slice(0, -1);
        }
        return;
    }

    buttons.forEach(function(button) {
        if (button.textContent === event.key) {
            button.click();
        }
    });

});