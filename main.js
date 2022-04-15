const navMenu = document.querySelector(".nav-menu i");
const navBrand = document.querySelector(".nav-brand h1");
const sidebar = document.querySelector(".sidebar");
const adminSidebar = document.querySelector(".admin-sidebar");
const publicSidebar = document.querySelector(".public-sidebar");
const sideTitle = document.querySelectorAll(".side-title");


window.addEventListener("keyup", (event) => {
  if(event.key === "p") {
    navBrand.innerText = "Dashboard";
    publicSidebar.classList.remove("d-none");
    adminSidebar.classList.add("d-none");
  } else if(event.key === "a") {
    navBrand.innerText = "Admin Dashboard";
    publicSidebar.classList.add("d-none");
    adminSidebar.classList.remove("d-none");
  }
})

navMenu.addEventListener("click", () => {
  sidebar.classList.toggle("short-width");
  sideTitle.forEach(title => {
    title.classList.toggle("d-none");
  })
})