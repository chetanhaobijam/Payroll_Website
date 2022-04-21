const navbarToggler = document.querySelector("#navbar-toggler");
const main = document.querySelector(".main");
const footer = document.querySelector("footer");

const narrowItems = () => {
  navbarToggler.addEventListener("click", () => {
    main.classList.toggle("narrow-main");
    footer.classList.toggle("narrow-footer");
  })
}

narrowItems();