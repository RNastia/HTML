const inputTimes = document.querySelector("#inputTimes");
const pView = document.querySelector("#view");
const dies = document.querySelectorAll(".buttons>button");
const button = document.querySelector('#Submit');
let selectedDie = null;


console.log(dies);

function diesMethods(e) {
    pView.innerHTML = "";
    selectedDie = e.target.id;
}

for (const die of dies) {
    die.addEventListener("click", diesMethods)
}

function submitMethod() {
    const answers = [];

    pView.innerHTML = "";

    const numberDie = +selectedDie.replace("D", "");

    for (let x = 0; x < inputTimes.value; x++) {
        const answer = Math.floor(Math.random() * numberDie) + 1;
        answers.push(answer);
    }

    console.log(answers);

    let viewString = "";
    for (let i = 0; i < answers.length; i++) {
        viewString += `<h1>Попытка номер:${i + 1} Результат:${answers[i]}</h1>`;
        console.log(viewString);
    }
    console.log(viewString);

    pView.innerHTML = viewString;
}

button.addEventListener("click", submitMethod)


// const times = inputTimes.value




// for (var y = 0; y < inputTimes; y++) {
//     viewString = `<h1>Попытка номер:${y} Результат:${answer2[y]}</h1>`
//     pView.innerHTML = viewString;
// }
