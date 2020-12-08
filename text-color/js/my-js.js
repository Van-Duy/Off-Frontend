
let text = document.getElementById("box").innerHTML;
let re = new RegExp(text,"frontend"); // search for all instances
console.log(re)
let newText = text.replace(re, `<mark>${searched}</mark>`);
document.getElementById("box").innerHTML = newText;