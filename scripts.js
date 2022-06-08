function RandomColor(){
    document.getElementById("target").style.color = randomHexColor();
    document.getElementById("colorBody").style.backgroundColor = randomHexColor();
}

function randomHexColor(){
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

//Counter Logic
var displayCount = document.querySelector ( ".screen");
var plus = document.querySelector (".more");
var minus = document.querySelector (".less");

let countClick = 0;

plus.addEventListener ("click", ()=>{
    countClick++;
    showCount();
})

minus.addEventListener ("click", ()=>{
    countClick--;
    showCount();
})



function showCount(){
    displayCount.innerHTML = countClick;
}

//
//
const randomValue = () =>{
    let baseColor = "rgba("

    for(let i = 0; i < 3 ; i++){
        baseColor += Math.floor(Math.random() * 255) + ",";
    }
    return baseColor
}