'use strict'
//getting input
let inputEl = document.getElementById("input");
let valueEl = document.getElementById("number");
let submitEl = document.getElementById("submit");

//functions

//EventListners
submitEl.addEventListener("click", function(e){
    e.preventDefault();
    let input = inputEl.value;
    let expence = valueEl.value;
    console.log(input, expence);
    
})