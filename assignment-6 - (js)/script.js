document.addEventListener("mousemove", (e) => {
    const mouse = document.getElementById("mouse");
    

    const trail = document.createElement("div");
    trail.classList.add("trail");
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 3000);
});
