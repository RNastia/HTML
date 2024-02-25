const inputTimes = document.querySelector("#inputTimes");
const pView = document.querySelector("#view");
const pView2 = document.querySelector("#view2");
const dies = document.querySelectorAll(".buttons>button");
const button = document.querySelector('#Submit');
const Answer = document.querySelectorAll("#inputAnswer");
const buttonCheck = document.querySelector('#check');
const buttonRound = document.querySelector('#round');
let selectedDie = null;


console.log(dies);

function diesMethods(e) {
    pView.innerHTML = "";
    pView2.innerHTML = "";
    selectedDie = e.target.id;
}

for (const die of dies) {
    die.addEventListener("click", diesMethods)
}

function submitMethod() {
    const answers = [];

    pView.innerHTML = "";
    pView2.innerHTML = "";

    const numberDie = +selectedDie.replace("D", "");

    for (let x = 0; x < inputTimes.value; x++) {
        if (inputTimes.value < 11){
            const answer = Math.floor(Math.random() * numberDie) + 1;
            answers.push(answer);
        }
        else {
            mistake = `<p>!&nbsp Вы не можете ввести такое количество попыток &nbsp!</p>`
            pView2.innerHTML = mistake;
        }
    }

    console.log(answers);

    let viewString = "";
    for (let i = 0; i < answers.length; i++) {
        viewString += `<p>Попытка номер:${i + 1}&nbspРезультат:${answers[i]}</p>`
    }
    console.log(viewString);

    pView.innerHTML = viewString;
}

button.addEventListener("click", submitMethod)


