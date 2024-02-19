const button = document.querySelector('#submit');
const inputFirstName = document.querySelector('#firstName');
const inputLastName = document.querySelector('#lastName');
const inputAge = document.querySelector('#age');
const inputKg = document.querySelector('#kg');
const buttonPounds = document.querySelector('#pounds');
const pView = document.querySelector('#view');
const pView2 = document.querySelector('#view2');
const pView3 = document.querySelector('#view3');
const pView4 = document.querySelector('#view4');

const inputWord = document.querySelector('#word');
const pView5 = document.querySelector('#view5');
const buttonSmall = document.querySelector('#small');
const buttonBig = document.querySelector('#big');
const buttonFirst = document.querySelector('#first_big');

const buttonTons = document.querySelector('#tons');
const buttonGrams = document.querySelector('#grams');
const buttonMilligramm = document.querySelector('#milligramm');
const buttonCentners= document.querySelector('#centners');


function method() {
    const firstName = inputFirstName.value;
    const lastName = inputLastName.value;
    const age = inputAge.value;

    sec = 86400 * firstName;
    const viewString = `<em><p class="name">В ${firstName} днях ${sec} секунд</p></em>`
    pView.innerHTML = viewString;

    sec2 = 31536000 * lastName;
    const viewString2 = `<em><p class="name2">В ${lastName} годах ${sec2} секунд</p></em>`
    pView2.innerHTML = viewString2;

    sec3 = 31536000 * age;
    const viewString3 = `<em><p class="name3">Т.к вам ${age} лет , то вам ${sec2} секунд</p></em>`
    pView3.innerHTML = viewString3;
}

button.addEventListener("click", method)

function button1() {
    const kg = inputKg.value;
    puds = 0.061 * kg;
    const viewString4 = `<em><p class="name4">В ${kg} килогаммах , ${puds} пудов</p></em>`
    pView4.innerHTML = viewString4;
}

buttonPounds.addEventListener("click", button1)

function button2() {
    const kg = inputKg.value;
    tons = 0.001 * kg;
    const viewString4 = `<em><p class="name4">В ${kg} килогаммах , ${tons} тонн</p></em>`
    pView4.innerHTML = viewString4;
}

buttonTons.addEventListener("click", button2)

function button3() {
    const kg = inputKg.value;
    grams = 1000 * kg;
    const viewString4 = `<em><p class="name4">В ${kg} килогаммах , ${grams} грамм </p></em>`
    pView4.innerHTML = viewString4;
}

buttonGrams.addEventListener("click", button3)

function button4() {
    const kg = inputKg.value;
    milligramm = 1000000 * kg;
    const viewString4 = `<em><p class="name4">В ${kg} килогаммах , ${milligramm} миллиграмм </p></em>`
    pView4.innerHTML = viewString4;
}

buttonMilligramm.addEventListener("click", button4)

function button5() {
    const kg = inputKg.value;
    centners = 0.01 * kg;
    const viewString4 = `<em><p class="name4">В ${kg} килогаммах , ${centners} центнеров </p></em>`
    pView4.innerHTML = viewString4;
}

buttonCentners.addEventListener("click", button5)

function button6() {
    const  word = inputWord.value;
    let small = word.toLowerCase();
    const viewString5 = `<em><p class="name5">${small}</p></em>`
    pView5.innerHTML = viewString5;
}

buttonSmall.addEventListener("click", button6)

function button7() {
    const  word = inputWord.value;
    let big = word.toUpperCase();
    const viewString5 = `<em><p class="name5">${big}</p></em>`
    pView5.innerHTML = viewString5;
}

buttonBig.addEventListener("click", button7)

function button8() {
    const  word = inputWord.value;
    let first = word[0].toUpperCase()+word.slice(1);
    const viewString5 = `<em><p class="name5">${first}</p></em>`
    pView5.innerHTML = viewString5;
}

buttonFirst.addEventListener("click", button8)


