document.querySelector(".btn").addEventListener("click", toggle);
document.querySelector(".btn-popup").addEventListener("click", toggle);

function toggle(e) {
  const popup = document.getElementById("popup");
  const blur = document.getElementById("blur");
  blur.classList.toggle("active");
  popup.classList.toggle("active");
  e.preventDefault();
}
