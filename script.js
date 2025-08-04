const container = document.getElementById("container");

function createGrid(size = 50) {
  container.innerHTML = ''; // Clear previous grid
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    container.appendChild(pixel);
  }

  enableDrawingOnHover(); // 🖌️ Enable drawing on hover
}

createGrid(); // default 16x16

// 🎯 Draw on click
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("pixel")) {
    e.target.style.backgroundColor = "yellow";
  }
});

// 🖱️ Draw on hover
function enableDrawingOnHover() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach(pixel => {
    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = "white";
    });
  });
}
