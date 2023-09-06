let imgContainer = document.querySelector("#container");
let icon = document.querySelector("i");

imgContainer.addEventListener("dblclick", function () {
  console.log("hello");
  icon.style.transform = "translate(-50%, -50%) scale(1)";
  icon.style.opacity = 0.7;

  setTimeout(() => {
    icon.style.opacity = 0;
  }, 850);

  setTimeout(() => {
    icon.style.transform = "translate(-50%, -50%) scale(0)";
  }, 900);
});
