const container = document.getElementById("container");
const MAXSIZE = 1024; // maximum size of the square grid in pixels
container.style.width = MAXSIZE + "px";
container.style.height = MAXSIZE + "px";

var grid = document.createElement("div"); // creating a separate div for the grid so that removing it later is easier
grid.setAttribute("id", "grid");
container.appendChild(grid);

function createGrid(squareNum){
    // bug: div pixel sizes (apparently) truncate to 4 decimal places, so if the div has more than that
    // there will be some blank space unnocupied by squares in the grid DOM element
    for(i = 0; i < squareNum; i++){
        const gridLine = document.createElement("div");
        gridLine.style.display = "flex";
        grid.appendChild(gridLine);
        
        for(j = 0; j < squareNum; j++){
            const square = document.createElement("div");
            const squareSize = MAXSIZE/squareNum;
            square.style.width = squareSize + "px";
            square.style.height = squareSize + "px";
            gridLine.appendChild(square);
            square.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "black";
            });
        }
}
}

createGrid(16);

const gridResizerBtn = document.getElementById("resizer");
gridResizerBtn.addEventListener("click", () => {
    var userInput = prompt("Input the number (between 1 and 100) of squares on each side");
    while(!(1 <= Number(userInput) && Number(userInput) <= 100)){
        console.log(Number(userInput));
        userInput = prompt("Please input a valid value");
    }
    
    userInput = Number(userInput);
    grid.remove();
    grid = document.createElement("div");
    grid.setAttribute("id", "grid");
    container.appendChild(grid);
    createGrid(userInput);
})