'use strict'
//getting input
let inputEl = document.getElementById("input");
let valueEl = document.getElementById("number");
let submitEl = document.getElementById("submit");
let outputDisplay = document.getElementById("output-value");


let valueArray = [];
let amountValue = [];
//functions
function valueDisplay(){
    let htmlcode = "";
    valueArray.forEach((list) => {
        let {input, expence} = list;
        console.log(list);
        //create
        htmlcode += `
        <span class = "output-value">${input}</span>
        <span class = "object-amount">${expence}</span>
        <button onclick() class="delete">delete</button>
        `
        //adding value
        outputDisplay.innerHTML = htmlcode;
    })
}
// filtervalue = amountValue.filter(val => val > 0?  )
//EventListners
submitEl.addEventListener("click", function(e){
    e.preventDefault();
    let input = inputEl.value;
    let expence = valueEl.value;
    console.log(input, expence);
    valueArray = [input, expence];
    console.log(valueArray);
    let listitems = {input, expence};
    console.log(listitems);

    // let listitems =[input, expence];
    // console.log(listitems);
    valueDisplay(listitems);
    filtervalue();
})