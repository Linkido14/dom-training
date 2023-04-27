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
});

/* ------------------------------------ */
/* --- Exercice 5 --- */
const buttons = document.querySelectorAll("#ex5 .button");
buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16); // function random color
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
}, 50); // 1000 = 1s, we need 20 letters/s so 1000 / 20 = 50
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

const button7 = document.getElementById("ex7-button");
const list7 = document.getElementById("ex7-list");

button7.addEventListener("click", () => {
    if (taskList.length > 0) {
        const li = document.createElement("li");
        li.innerText = taskList.shift();
        li.classList.add("task-list-task");
        list7.appendChild(li);
        li.addEventListener("click", function () {
            taskList.unshift(this.innerText);
            list7.removeChild(this);
        });
    } else {
        alert("No more tasks !");
    }
});
/* ------------------------------------ */
/* --- Exercice 8 --- */
const btnLvl = document.getElementById("ex8-button-level");
const btnStr = document.getElementById("ex8-button-strength");
const btnShi = document.getElementById("ex8-button-shield");
const barLvl = document.getElementById("ex8-level");
const barStr = document.getElementById("ex8-strength");
const barShi = document.getElementById("ex8-shield");

// create counter
const counters = {
    level: 0,
    strength: 0,
    shield: 0,
};

// initiate counter
function updateCounterAndBar(index, value, bar) {
    counters[index] = value;
    bar.style.width = `${value}%`;
}

// increment counter and update bar
function incrementCounterAndBar(index, bar) {
    const value = counters[index] + 5;
    if (value <= 100) {
        updateCounterAndBar(index, value, bar);
    }
}

// activate counter and update bar on click
btnLvl.addEventListener("click", function () {
    incrementCounterAndBar("level", barLvl);
});

btnStr.addEventListener("click", function () {
    incrementCounterAndBar("strength", barStr);
});

btnShi.addEventListener("click", function () {
    incrementCounterAndBar("shield", barShi);
});
