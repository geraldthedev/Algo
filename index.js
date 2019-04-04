
let stage = document.getElementById('root'),
    input = document.createElement("input"),
    buton = document.createElement("button");



stage.appendChild(input);

stage.appendChild(buton).innerHTML = 'Submit';







input.addEventListener("keypress", buton.addEventListener("click", async function callIt(){
const url = 'https://numbersapi.p.rapidapi.com/1729/math?fragment=true&json=true'
const res =await fetch(url, {
    method: "GET",
    headers:{
        "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
        "X-RapidAPI-Key": "0ffcb639c8msh9cfa6ba024c1502p1ffe6ejsncf8d69fe5cbf"
    }

});

const data =await res.json();











}))
