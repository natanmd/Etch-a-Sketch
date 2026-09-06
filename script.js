const container = document.getElementById("container");
const MAXSIZE = 1024; // maximum size of the square grid in pixels
container.style.width = "" + MAXSIZE + "px";
container.style.height = "" + MAXSIZE + "px";

for(i = 0; i < 16; i++){
    const gridLine = document.createElement("div");
    gridLine.classList.add("gridLine");
    gridLine.style.display = "flex";
    container.appendChild(gridLine);
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

// n -> numero de squares
// cada square precisa ter 1024/n pixels ao todo (borda 1px + dentro)