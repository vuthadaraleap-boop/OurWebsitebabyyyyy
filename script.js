document.addEventListener("DOMContentLoaded", () => {
  const flower = document.querySelector("#animation-flower");
  const word = document.querySelector("h1");
  const rainDrop = document.querySelector(".rain-drop");

  setTimeout(() => {
    flower.style.display = "inherit";
    word.style.display = "none";
  }, 2000);
});

function createRaindrop() {
  const body = document.querySelector("body");
  const xPosition = Math.random() * window.innerWidth;
  const delay = Math.random() * 5;
  const duration = Math.random() * 2 + 2;

  const rainDrop = document.createElement("div");
  rainDrop.className = "rain";
  rainDrop.style.left = `${xPosition}px`;
  rainDrop.style.animationDelay = `${delay}s`;
  rainDrop.style.animationDuration = `${duration}s`;
  rainDrop.style.display = "none";
  body.appendChild(rainDrop);

  setTimeout(() => {
    rainDrop.style.display = "inherit";
  }, 800);
}

setInterval(createRaindrop, 100);

      // Show flower after 2s, then popup after 5s
      setTimeout(() => {
        document.getElementById("animation-flower").style.display = "block";
      }, 2000);

      setTimeout(() => {
        document.getElementById("popupBox").classList.add("active");
      }, 5000);

      function answerYes() {
        alert("Yay! 🌸 I'm glad you love it 💖");
        document.getElementById("popupBox").classList.remove("active");
      }

      function answerNo() {
        alert("Oh no 😢 Maybe I'll give you more flowers next time 🌹");
        document.getElementById("popupBox").classList.remove("active");
      }
