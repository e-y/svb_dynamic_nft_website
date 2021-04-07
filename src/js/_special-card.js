export default function specialCard() {

    //Movement Animation to happen
    const card = document.querySelector(".special-card__item");
    const container = document.querySelector(".special-card__container");
    //Items
    const title = document.querySelector(".special-card__title");
    const player = document.querySelector(".special-card__player img");
    const purchase = document.querySelector(".purchase");
    const description = document.querySelector(".special-card__info h3");
    const sizes = document.querySelector(".sizes");

    //Moving Animation Event
    container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //Animate In
    container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    player.style.transform = "translateZ(100px)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
    });
    //Animate Out
    container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    player.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    });
}
