const body = document.querySelector("body");
const block = document.querySelector(".block");
const block3 = document.querySelector(".block3");
const block4 = document.querySelector(".block4");
const block5 = document.querySelector(".block5");
const button = document.querySelector("#first");
const button3 = document.querySelector("#third");
const button2 = document.querySelector("#second");
const text = document.querySelector("#PaintingComunication");

const groupBackgroundColors = [block, block3, block4, block5, button, button3];
const groupColors = [button, button3];

function theme() {
    if (body.classList.contains("body-dark")) {

        body.classList.remove("body-dark");
        body.classList.add("body-light");

        // for (const elem of groupBackgroundColors) {
        //     elem.classList.remove("dark");
        //     elem.classList.add("light");
        // }

        groupBackgroundColors.forEach((elem) => {
            elem.classList.remove("dark");
            elem.classList.add("light");
        })

        groupColors.forEach((elem) => {
            elem.classList.remove("color-dark");
            elem.classList.add("color-light");
        })

        button2.classList.remove("border-dark");
        button2.classList.add("border-light");

        text.classList.remove("text-dark");
        text.classList.add("text-light");

    }
    
    else {
        body.classList.remove("body-light");
        body.classList.add("body-dark");

        groupBackgroundColors.forEach((elem) => {
            elem.classList.remove("light");
            elem.classList.add("dark");
        })

        groupColors.forEach((elem) => {
            elem.classList.remove("color-light");
            elem.classList.add("color-dark");
        })

        button2.classList.remove("border-light");
        button2.classList.add("border-dark");

        text.classList.remove("text-light");
        text.classList.add("text-dark");

    }
}
