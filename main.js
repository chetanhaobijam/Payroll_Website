const navIcon = document.querySelector(".nav-icon");
const sidebar = document.querySelector(".sidebar");
const closeSidebarIcon = document.querySelector(".close-sidebar i");


// A Function to control Navigation Sidebar
const sidebarCollapse = () => {
  navIcon.addEventListener("click", () => {
    sidebar.classList.toggle("left");
  })
}

// A Function to close Navigation Sidebar
const closeSidebar = () => {
  closeSidebarIcon.addEventListener("click", () => {
    sidebar.classList.remove("left");
  })
}

sidebarCollapse();
closeSidebar();

// Start copying from here
const adminBtn = document.querySelector(".admin-btn");
const masterBtn = document.querySelector(".master-btn");
const adminUl = document.querySelector(".admin-ul");
const masterUl = document.querySelector(".master-ul");

const collapseSection = (btn, section) => {
  btn.addEventListener("click", () => {
    section.classList.toggle("hide");
  })
}

collapseSection(adminBtn, adminUl);
collapseSection(masterBtn, masterUl);