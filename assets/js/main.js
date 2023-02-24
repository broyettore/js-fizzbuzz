'use strict';

const divContainer = document.querySelector(".container")  // main container selected
const startBtn = document.querySelector(".action") // button start selected

// EVENT TO MAKE GAME APPEAR

startBtn.addEventListener("click", startGame);

function startGame() {
     //   LOOP STARTS 
    for (let i = 1; i <= 100; i++) {

        // Create a div inside main container with a class of num-box 
        const divChild = document.createElement("div");
        divChild.classList.add("num-box");
        divContainer.append(divChild);

        // Create a span inside divChild with a class of num
        const divSpan = document.createElement("span");
        divSpan.classList.add("num");
        divChild.append(divSpan);
 
        //   Conditions apply
       if (i % 3 === 0 && i % 5 === 0) {
        divChild.classList.add("fizzbuzz");
        divSpan.append("FizzBuzz");
       } else if (i % 3 === 0) {
        divChild.classList.add("fizz");
        divSpan.append("Fizz");
       } else if (i % 5 === 0) {
        divChild.classList.add("buzz");
        divSpan.append("Buzz");
       } else {
        divSpan.append(i);
       }
     } 
}


