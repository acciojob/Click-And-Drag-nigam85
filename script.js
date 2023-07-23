// Your code here.
let isDragging = false;
    let dragStartX = 0;
    let container = document.querySelector(".container");
    let cubes = document.querySelectorAll(".cube");

    container.addEventListener("mousedown", (e) => {
      isDragging = true;
      dragStartX = e.clientX;
    });

    container.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const dragDistance = e.clientX - dragStartX;
      cubes.forEach((cube, index) => {
        cube.style.transform = `rotateY(${dragDistance / 2}deg)`;
        cube.style.transition = "transform 0s";
      });
    });

    container.addEventListener("mouseup", () => {
      isDragging = false;
      cubes.forEach((cube) => {
        cube.style.transition = "transform 0.5s";
        cube.style.transform = "rotateY(0)";
      });
    });