const container = document.getElementById("container");

for(i = 0; i < 16; i++){
    const gridLine = document.createElement("div");
    gridLine.classList.add("gridLine");
    gridLine.style.display = "flex";
    container.appendChild(gridLine);
    for(j = 0; j < 16; j++){
        const square = document.createElement("div");
        square.classList.add("square");
        gridLine.appendChild(square);
    }
}