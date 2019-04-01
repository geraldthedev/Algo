let a = [];
let b = [];
let i = 0;
let stage = document.getElementById('root'),
    input = document.createElement("input"),
    buton = document.createElement("button");




stage.appendChild(input);

stage.appendChild(buton).innerHTML = 'Submit';



buton.addEventListener("click", newer= () => {





a.push(input.value);
console.log("from input " + a);

});





