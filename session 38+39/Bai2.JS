const searchContainer = document.getElementById("searchContainer");
const searchInput = document.getElementById("searchInput");

searchContainer.addEventListener("mouseenter", function () {
  searchContainer.style.width = "300px";
  searchInput.style.width = "calc(100% - 30px)";
  searchInput.style.padding = "0 5px";
});

searchContainer.addEventListener("mouseleave", function () {
  searchContainer.style.width = "40px";
  searchInput.style.width = "0";
  searchInput.style.padding = "0";
});
