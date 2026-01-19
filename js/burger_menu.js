document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("drawerToggle");
  const drawerNav = document.getElementById("navbarDrawer");
  const drawerClose = document.getElementById("drawerClose");

  if (!burgerMenu || !drawerNav) return;

  function openDrawer() {
    drawerNav.classList.add("open");
    burgerMenu.style.visibility = "hidden"; // hides icon but keeps layout stable
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawerNav.classList.remove("open");
    burgerMenu.style.visibility = "visible";
    document.body.style.overflow = "";
  }

  burgerMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    openDrawer();
  });

  if (drawerClose) {
    drawerClose.addEventListener("click", closeDrawer);
  }

  // Close when clicking outside the panel (on the backdrop)
  drawerNav.addEventListener("click", (e) => {
    if (e.target === drawerNav) closeDrawer();
  });

  // Close when clicking any link inside drawer
  drawerNav.querySelectorAll("a, .chat-btn").forEach((el) => {
    el.addEventListener("click", closeDrawer);
  });
});
