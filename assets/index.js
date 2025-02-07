const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

let i = 0;
let w = window.innerWidth - 120;
let h = window.innerHeight - 60;
let hidden = true;

btn1.addEventListener("click", yesFunction);
btn2.addEventListener("click", onYesNo);
btn2.addEventListener("mouseover", onMouseOver);

function onYesNo() {
    if (i === 8)
        yesFunction()
    else
        randomizeFunction
}

function onMouseOver () {
    if (lines[i] === "Si :D"){
        btn2.removeEventListener("mouseover", randomizeFunction, false);
        btn2.textContent = lines[i];
        if (hidden) {
            let container = document.getElementById("container");
            let text = document.createElement("p");
            text.className = "pIndex";
            text.textContent = "Necesitaba medidas desesperadas, perdón no pensé que no quisieras tanto :'(";
            container.appendChild(text);
            hidden = false;
        }   
    }
    else 
        randomizeFunction();
}

function yesFunction () {
    location.href = "./pages/page.html"
}

function randomizeFunction() {
    if (i === 0)
        btn2.style.position = "absolute"
    const wr = Math.floor(Math.random() * w);
    const hr = Math.floor(Math.random() * h);
    btn2.style.left = `${wr}px`
    btn2.style.top = `${hr}px`
    if (i < 9) {
        btn2.textContent = lines[i];
        i++;
    }    
}

const lines = [
    "Ahh intentaste darle no :´(",
    "No otra vez :((",
    "Tan mal estoy?",
    "Ohh pues porq no? :(",
    "Y si mejor le das que si?",
    "Ándale, dale que sí",
    "Eres dificil de convencer",
    "El sí sería mejor, ¿no crees?",
    "Si :D"
];