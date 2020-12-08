const faq = document.querySelectorAll(".faq-toggle");

faq.forEach((elem) => {
    elem.addEventListener("click", () => {
        elem.parentNode.classList.toggle("active");
    });
});
