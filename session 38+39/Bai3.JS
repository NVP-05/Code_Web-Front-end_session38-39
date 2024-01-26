document.addEventListener("DOMContentLoaded", function () {
  let image = document.getElementById("main-image");
  let overlay = document.getElementById("overlay");

  function fadeImage() {
    let opacity = 10;
    let percent = 0;

    let timer = setInterval(function () {
      if (opacity <= 0) {
        clearInterval(timer);
        overlay.style.display = "none";
      } else {
        opacity--;
        percent += 10;
        image.style.filter = "blur(" + opacity + "px)";
        overlay.textContent = percent + "%";
      }
    }, 100);
  }

  setTimeout(fadeImage, 1000);
});
