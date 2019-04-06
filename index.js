
let stage = document.getElementById('root'),
    input = document.createElement("input"),
    buton = document.createElement("button");



stage.appendChild(input);

stage.appendChild(buton).innerHTML = 'Submit';







input.addEventListener("keypress", buton.addEventListener("click", async function callIt(){
const url = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?&api-key=xsFcDSN2hxkxB7fcj1775KIXA2D566kh'
const res =await fetch(url, {
    method: "GET",
    

});

const data =await res.json();
console.log(data)












}))
