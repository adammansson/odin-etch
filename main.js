const GRID_PIXEL_SIZE = 600;

const container = document.querySelector("#container");

function generateGrid(gridSize) {
    const squares = [];
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("square");

            square.style.width = `${GRID_PIXEL_SIZE/gridSize}px`;
            square.style.height = `${GRID_PIXEL_SIZE/gridSize}px`;

            row.appendChild(square);
            squares.push(square);
        }
        container.appendChild(row);
    }

    squares.forEach(s => {
        s.addEventListener("mouseenter", e => {
            s.classList.add("painted");
        });
    });
}

const changeSize = document.querySelector("#changeSize");
changeSize.addEventListener("click", e => {
    let userSize = parseInt(prompt("Enter new size"));
    while (isNaN(userSize) || userSize > 100) {
        userSize = parseInt(prompt("Enter new size, again"));
    }
    document.querySelectorAll(".row").forEach(r => r.remove());
    generateGrid(userSize);
});

generateGrid(16);
