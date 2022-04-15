const navHeader = document.querySelector(".nav-header h1");
const adminSidebar = document.querySelector(".admin-sidebar");
const publicSidebar = document.querySelector(".public-sidebar");

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