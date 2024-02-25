const inputTimes = document.querySelector("#inputTimes");
const pView = document.querySelector("#view");
const pView2 = document.querySelector("#view2");
const pView3 = document.querySelector("#view3");
const pView4 = document.querySelector("#view4");
const dies = document.querySelectorAll(".buttons>button");
const button = document.querySelector('#submit');
const inputAnswer = document.querySelector("#inputAnswer");
const buttonCheck = document.querySelector('#check');
const buttonRound = document.querySelector('#round');
let selectedDie = null;
let times = 0;
let i = 0;
let score = 0;
let allTries = 0;

function diesMethods(e) {
    pView.innerHTML = "";
    selectedDie = e.target.id;
}

for (const die of dies) {
    die.addEventListener("click", diesMethods)
}

function submitMethod() {
    times = inputTimes.value;
    i = 0;
    pView.innerHTML = "";
    this.disabled = true;
    buttonCheck.disabled = false;
}

button.addEventListener("click", submitMethod)

function checkMethod() {
    let viewString = "";

    const numberDie = +selectedDie.replace("D", "");
    const guessValue = +inputAnswer.value;

    const result = Math.floor(Math.random() * numberDie) + 1;

    const isLucky = guessValue === result;

    const showYourGuess = isLucky ? "Вы угадали" : "Вы не угадали";

    if (i < times) {
        viewString = `<p>Попытка номер:${i}, Результат:${result} - ${showYourGuess}</p>`;
        ++allTries;
        if (isLucky) { ++score; }
    } else {
        viewString = "у вас закончились попытки";
        this.disabled = true;
    }

    ++i;

    pView.innerHTML += viewString;

    pView2.innerHTML = `<p>Все ваши попытки: ${allTries}</p>`
    pView3.innerHTML = `<p>Ваш счет:${score}</p>`
    pView4.innerHTML = `<p>Процент угаданного: ${score / allTries * 100} </p>`
}

buttonCheck.addEventListener("click", checkMethod)

function roundMethod() {
    i = 0;
    pView.innerHTML = "";
    button.disabled = false;
}

buttonRound.addEventListener("click", roundMethod)

