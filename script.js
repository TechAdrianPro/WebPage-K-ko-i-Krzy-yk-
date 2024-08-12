let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let playerSymbol = 1; // Gracz jest kółkiem (1)
let isAIPlaying = false; // Flaga sprawdzająca, czy AI wykonuje ruch

function createBoard() {
    const table = document.getElementById('game-board');
    table.innerHTML = ''; // Czyść istniejącą zawartość

    for (let i = 0; i < 3; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('td');
            cell.id = `cell-${i}-${j}`;
            cell.onclick = () => makeMove(i, j);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

function makeMove(row, col) {
    if (board[row][col] !== 0 || isAIPlaying) return;

    board[row][col] = playerSymbol;
    document.getElementById(`cell-${row}-${col}`).innerText = playerSymbol === 1 ? 'O' : 'X';
    checkGameState();

    isAIPlaying = true; // AI teraz wykonuje ruch

    setTimeout(() => {
