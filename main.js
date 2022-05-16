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