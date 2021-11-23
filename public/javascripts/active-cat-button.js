
// Get the container element
var btnContainer = document.getElementById("menu");
var btns = btnContainer.getElementsByClassName("show-cat-btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(e) {
    e.stopPropagation();
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
   this.className += " active";
  });
}