const container = document.getElementById("container");


function createGrid(size = 16) {

    container.innerHTML = ''; // Clear previous grid
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    for (let i = 0; i < size * size; i++) {

        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        container.appendChild(pixel);
    }

}




createGrid(); // default 16x16


container.addEventListener("click", (e) => {
  if (e.target.classList.contains("pixel")) {
    e.target.style.backgroundColor = "yellow"; // or any color
  }
});
