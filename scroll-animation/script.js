const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerZoneBottom = (window.innerHeight / 5) * 4.2;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerZoneBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
}
