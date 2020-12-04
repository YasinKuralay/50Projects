const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

input.addEventListener("click", (event) => {
    event.stopPropagation();
});

btn.addEventListener("click", (event) => {
    event.stopPropagation();

    search.classList.toggle("active");
    input.focus();

    document.addEventListener("click", function documentEventListener() {
        search.classList.toggle("active");
        document.removeEventListener("click", documentEventListener);
    });
});
