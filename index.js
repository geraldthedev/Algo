let a = [];
let b = [];
let i = 0;
let stage = document.getElementById('root'),
    input = document.createElement("input"),
    buton = document.createElement("button");



stage.appendChild(input);

stage.appendChild(buton).innerHTML = 'Submit';







input.addEventListener("keypress", buton.addEventListener("click", async function callIt(){
const url = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=56af104aec8db3f6b9434f46ef28c901'
const res =await fetch(url);

const data =await res.json();



document.body.innerHTML = JSON.stringify(data);
console.log(data);

callIt();
}, 1000) );






