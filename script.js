// FECHA DE INICIO DEL AMOR ❤️
const startDate = new Date("2022-06-06T00:00:00");

function updateTimer() {
  const now = new Date();
  let diff = Math.floor((now - startDate) / 1000);

  const days = Math.floor(diff / 86400);
  diff %= 86400;
  const hours = Math.floor(diff / 3600);
  diff %= 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  document.getElementById("timer").textContent =
    `Mi amor por ti comenzó hace ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

setInterval(updateTimer, 1000);
updateTimer();

// Corazones cayendo ❤️
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart-fall";
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (2 + Math.random() * 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 300);

// Música 🎵
function playMusic() {
  document.getElementById("music").play();
}
