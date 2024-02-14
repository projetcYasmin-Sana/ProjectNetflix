let acc = document.getElementsByClassName("accordion");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    let anser = this.nextElementSibling;
    if (anser.style.display === "block") {
      anser.style.display = "none";
    } else {
      anser.style.display = "block";
    }
  });

}
