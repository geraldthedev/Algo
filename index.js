let a = [];
let b = [];
let i = 0;
let stage = document.getElementById('root'),
    input = document.createElement("input"),
    buton = document.createElement("button");



stage.appendChild(input);

stage.appendChild(buton).innerHTML = 'Submit';








buton.addEventListener("click", callIt = ()=>{
const api = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=56af104aec8db3f6b9434f46ef28c901'

    callback =()=>{
        fetch(api,
        {
            method: 'GET'
        })

        console.log()
    }


callback();




})





