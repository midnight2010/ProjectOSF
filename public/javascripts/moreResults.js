let main = document.querySelector(".card-container");
let sections = main.getElementsByClassName("card-preview");
let btn = document.querySelector(".more");
for (i = 0; i < sections.length; i++) {
  if (i > 5) {
    sections[i].classList.add("hidden");
  }
}
btn.addEventListener("click", (e) => {
  btn.classList.add("hidden");
  for (let i = 6; i < sections.length; i++) {
    sections[i].classList.remove("hidden");
  }
});
