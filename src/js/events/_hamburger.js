export default function hamburger() {
    const hamburger = document.querySelector("[data-function=js-hamburger]");
    if (hamburger !== undefined) {
        hamburger.addEventListener("click", function(event) {
            hamburger.classList.toggle("is-active");
        })
    }
}