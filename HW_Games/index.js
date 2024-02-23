const kids = {
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

const teens = {
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

const youngAdults = {
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

const adults = {
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
    kids,
    teens,
    youngAdults,
    adults
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
        case age >= 1 && age <= 10: viewGames(categories.kids.games); break;
        case age >= 11 && age <= 16: viewGames(categories.teens.games); break;
        case age >= 17 && age <= 18: viewGames(categories.youngAdults.games); break;
        case age > 18: viewGames(categories.adults.games); break;
    }
}

btnEnter.addEventListener("click", ageGame)



