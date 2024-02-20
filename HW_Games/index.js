const button = document.querySelector('#enter');
const inputAge = document.querySelector('#age');
const divView = document.querySelector('#view')
const games = ["Tetris", "Angry birds", "Mario"]
const games2 = ["Tetris2", "Angry birds2", "Mario2"];
const games3 = ["Tetris3", "Angry birds3", "Mario3"];

function viewGames(games) {
    let viewGames = '';

    // for (i = 0; i < games.length, i++) {
    //     viewGames += `<div class="game">${games[i]}</div>`;
    // }

    // games.forEach(game => {
    //     viewGames += `<div class="game">${game}</div>`;
    // });

    // viewGames = games.map(game => `<div class="game">${game}</div>`).join();

    for (const game of games) {
        viewGames += `<div class="game">${game}</div>`;
    }

    divView.innerHTML = viewGames;
}

function ageGame() {
    const age = inputAge.value;

    switch (true) {
        case age >= 1 && age <= 10: viewGames(games); break;
        case age >= 11 && age <= 15: viewGames(games2); break;
        case age >= 15: viewGames(games3); break;
    }
}

button.addEventListener("click", ageGame)