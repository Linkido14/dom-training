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
const p6 = document.querySelector("#ex6-paragraph");
const text6 = p6.textContent;
let counter = 0;

p6.textContent = "";

const intervalId = setInterval(function () {
    p6.textContent += text6[counter];
    counter++;
    if (counter === text6.length) {
        clearInterval(intervalId);
    }
}, 50); // 50 because 1000 is a second and we need 20 letters per second : 1000 / 20 = 50
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
