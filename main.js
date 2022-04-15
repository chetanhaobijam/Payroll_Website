const navMenu = document.querySelector(".nav-menu i");
const navHeader = document.querySelector(".nav-header h1");
const sidebar = document.querySelector(".sidebar");
const adminSidebar = document.querySelector(".admin-sidebar");
const publicSidebar = document.querySelector(".public-sidebar");
const sideTitle = document.querySelectorAll(".side-title");


window.addEventListener("keyup", (event) => {
  if(event.key === "p") {
    navHeader.innerText = "Dashboard";
    publicSidebar.classList.remove("d-none");
    adminSidebar.classList.add("d-none");
  } else if(event.key === "a") {
    navHeader.innerText = "Admin Dashboard";
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