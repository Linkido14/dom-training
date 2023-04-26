/* ------------------------------------ */
/* --- Exercice 1 --- */
const btn = document.querySelector(".button");
const text = document.querySelector(".text");
btn.addEventListener("click", function (event) {
    text.classList.toggle("visible");
});
/* ------------------------------------ */
/* --- Exercice 2 --- */
const scrollValue = document.getElementById("ex2-scroll-value");
window.addEventListener("scroll", function () {
    scrollValue.textContent = Math.round(window.scrollY);
});

/* ------------------------------------ */
/* --- Exercice 3 --- */

// ex3-animals
const btn2 = document.querySelector("#ex3 .button");
const list = document.querySelector("#ex3-animals");
btn2.addEventListener("click", () => {
    // const firstChild = list.firstElementChild;
    list.appendChild(list.firstElementChild);
});

/* ------------------------------------ */
/* --- Exercice 4 --- */
const button = document.querySelector("#ex4 .button");
const colors = ["blue", "red", "green", "purple"];
let indexColors = 0;

button.addEventListener("click", () => {
    button.style.background = colors[indexColors % colors.length];
    indexColors++;
    // if (indexColors >= colors.length) {
    //     indexColors = 0;
    // }
});

/* ------------------------------------ */
/* --- Exercice 5 --- */
const buttons = document.querySelectorAll("#ex5 .button");
buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        button.style.backgroundColor = "#" + randomColor;
    });
});

/* ------------------------------------ */
/* --- Exercice 6 --- */

const paragraph = document.getElementById("ex6-paragraph");
// console.log(text6);

let index = 0;
const intervalId = setInterval(() => {
    const subText = paragraph.textContent.substr(index, 20);
    index += 20;
    paragraph.textContent = subText;
    if (index >= paragraph.textContent.length) {
        clearInterval(intervalId);
    }
}, 1000);
/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse",
];

/* ------------------------------------ */
/* --- Exercice 8 --- */
