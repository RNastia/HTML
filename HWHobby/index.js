const body = document.querySelector("body");
const block=document.querySelector(".block");
const block3=document.querySelector(".block3");
const block4=document.querySelector(".block4");
const block5=document.querySelector(".block5");
const button3=document.querySelector("#third");
const button2=document.querySelector("#second");
const text=document.querySelector("#PaintingComunication");

function theme(event) {

    const button=event.target;
    console.log(button)
    if (body.classList.contains("body-dark")) {

        body.classList.remove("body-dark");
        body.classList.add("body-light");

        block.classList.remove("dark");
        block.classList.add("light");

        block3.classList.remove("dark");
        block3.classList.add("light");

        block4.classList.remove("dark");
        block4.classList.add("light");

        block5.classList.remove("dark");
        block5.classList.add("light");

        button.classList.remove("dark");
        button.classList.add("light");

        button.classList.add("dark");
        button.classList.add("light");

        button.classList.add("color-dark");
        button.classList.add("color-light");

        button3.classList.remove("dark");
        button3.classList.add("light");

        button3.classList.remove("color-dark");
        button3.classList.add("color-light");

        button2.classList.remove("border-dark");
        button2.classList.add("border-light");

        text.classList.remove("text-dark");
        text.classList.add("text-light");

    }
    else {
        body.classList.remove("body-light");
        body.classList.add("body-dark");

        block.classList.remove("light");
        block.classList.add("dark");
        
        block3.classList.remove("light");
        block3.classList.add("dark")

        block4.classList.remove("light");
        block4.classList.add("dark")

        block5.classList.remove("light");
        block5.classList.add("dark")

        button.classList.remove("light");
        button.classList.add("dark");

        button.classList.remove("color-light");
        button.classList.add("color-dark");

        button3.classList.remove("light");
        button3.classList.add("dark");

        button3.classList.remove("color-light");
        button3.classList.add("color-dark");

        button2.classList.remove("border-light");
        button2.classList.add("border-dark");

        text.classList.remove("text-light");
        text.classList.add("text-dark");

    }
}
