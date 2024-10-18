const menus = document.querySelectorAll(".offerMenu__nav");
const contents = document.querySelectorAll(".offerMenu__info");
menus.forEach((nav) => {
  nav.addEventListener("click", () => {
    removeActiveNav();
    nav.classList.add("active");
    const activeContent = document.querySelector(`#${nav.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});
function removeActiveNav() {
  menus.forEach((nav) => {
    nav.classList.remove("active");
  });
}
function removeActiveContent() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
}
