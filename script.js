const GRID_PIXEL_SIZE = 600;
const DEFAULT_COLOR = "#795A46";
const PAINTED_COLOR = "#CDC3BE";

const container = document.querySelector("#container");

function generateGrid(gridSize) {
    const squares = [];
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");

            square.style.width = `${GRID_PIXEL_SIZE/gridSize}px`;
            square.style.height = `${GRID_PIXEL_SIZE/gridSize}px`;
            square.style.backgroundColor = DEFAULT_COLOR;

            square.addEventListener("mouseover", e => {
                if (e.buttons !== 0) {
                    square.style.backgroundColor = PAINTED_COLOR;
                }
            });

            row.appendChild(square);
            squares.push(square);
        }
        container.appendChild(row);
    }
}

const sizeSlider = document.querySelector("#slider");
sizeSlider.value = 16;

const sliderText = document.querySelector("#sliderText");
sliderText.textContent = "Current size of pixel: " + sizeSlider.value;

sizeSlider.addEventListener("change", e => {
    document.querySelectorAll(".row").forEach(r => r.remove());
    generateGrid(sizeSlider.value);
    sliderText.textContent = "Current size of pixel: " + sizeSlider.value;
});

generateGrid(16);
