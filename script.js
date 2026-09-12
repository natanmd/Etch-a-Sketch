const container = document.getElementById("container");
const MAXSIZE = 1024; // maximum size of the square grid in pixels
container.style.width = MAXSIZE + "px";
container.style.height = MAXSIZE + "px";

var grid = document.createElement("div"); // creating a separate div for the grid so that removing it later is easier
grid.setAttribute("id", "grid");
container.appendChild(grid);

for(i = 0; i < 16; i++){
    const gridLine = document.createElement("div");
    // gridLine.classList.add("gridLine");
    gridLine.style.display = "flex";
    grid.appendChild(gridLine);
    for(j = 0; j < 16; j++){
        const square = document.createElement("div");
        const squareSize = 64;
        square.style.width = "" + squareSize + "px";
        square.style.height = "" + squareSize + "px";
        square.classList.add("square");
        gridLine.appendChild(square);
        square.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";
            // console.log(e);
        });
    }
}

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

    const newSquareSize = MAXSIZE/userInput; 
    // bug: div pixel sizes (apparently) truncate to 4 decimal places, so if the div has more than that
    // there will be some blank space unnocupied by squares in the grid DOM element
    // console.log(newSquareSize);

    for(i = 0; i < userInput; i++){
        const gridLine = document.createElement("div");
        // gridLine.classList.add("gridLine");
        gridLine.style.display = "flex";
        grid.appendChild(gridLine);
        for(j = 0; j < userInput; j++){
            const square = document.createElement("div");
            square.style.width = newSquareSize + "px";
            square.style.height = newSquareSize + "px";
            square.classList.add("square");
            gridLine.appendChild(square);
            square.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "black";
                // console.log(e);
            });
        }
    }
})



// n -> numero de squares
// cada square precisa ter 1024/n pixels ao todo (borda 1px + dentro)