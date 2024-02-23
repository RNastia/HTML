const kid = {
    games: [
        {
            name: "Tetris",
            img: "Tetris"
        },
        {
            name: "Angry birds",
            img: "angryBirds"
        },
        {
            name: "Mario",
            img: "Mario"
        },
    ]
};

const teen = {
    games: [
        {
            name: "Stray",
            img: "Stray"
        },
        {
            name: "Call of duty",
            img: "CallOfDuty"
        },
        {
            name: "Detroit become human",
            img: "Detroit"
        },
    ]
}

const youngAdult = {
    games: [
        {
            name: "Little nightmares",
            img: "Nightmares"
        },
        {
            name: "God of war",
            img: "GodOfWar"
        },
        {
            name: "Dead space",
            img: "DeadSpace"
        },
    ]
}

const adult = {
    games: [
        {
            name: "Resident evil village",
            img: "ResidentEvil"
        },
        {
            name: "The Witcher",
            img: "TheWitcher"
        },
        {
            name: "Batman: Arkham Knight",
            img: "BecauseIAmBatman"
        },
    ]
}

const categories = {
    kid,
    teen,
    youngAdult,
    adult
}


const btnEnter = document.querySelector('#enter');
const inputAge = document.querySelector('#age');
const divView = document.querySelector('.accordion-area');

function viewGames(games) {
    let viewGames = '';

    for (const game of games) {
        viewGames += `<button class="accordion">${game.name}</button>`;
        viewGames += `<div class="panel"><img src='./images/${game.img}.jpg' alt=${game.name}/></div>`;
    }

    divView.innerHTML = viewGames;

    setAccordionEvents();
}

function setAccordionEvents() {
    const btnAccordions = document.querySelectorAll('.accordion');

    function accordionAction() {
        this.classList.toggle("active");

        const panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }

    for (const btn of btnAccordions) {
        btn.addEventListener("click", accordionAction)
    }
}

function ageGame() {
    const age = inputAge.value;

    switch (true) {
        case age >= 1 && age <= 10: viewGames(categories.kid.games); break;
        case age >= 11 && age <= 16: viewGames(categories.teen.games); break;
        case age >= 17 && age <= 18: viewGames(categories.youngAdult.games); break;
        case age > 18: viewGames(categories.adult.games); break;
    }
}

btnEnter.addEventListener("click", ageGame)



