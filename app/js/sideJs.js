const sideOpen = document.querySelector(".side-open");
const sideClose = document.querySelector(".side-close");
const sideFixed = document.querySelector(".side-fixed");
const sideOverlay = document.querySelector(".side-overlay");

function Open() {
  sideFixed.classList.add("open");
  sideOverlay.classList.add("open");
  sideOpen.classList.add("close");
  bodymb.style.overflowY = "hidden";
}

function Close() {
  sideFixed.classList.remove("open");
  sideOverlay.classList.remove("open");
  sideOpen.classList.remove("close");
  bodymb.style.overflowY = "auto";
}
if (sideOpen) {
  sideOpen.addEventListener("click", () => {
    Open();
  });
}
if (sideClose) {
  sideClose.addEventListener("click", () => {
    Close();
  });
}
if (sideOverlay) {
  sideOverlay.addEventListener("click", () => {
    Close();
  });
}
