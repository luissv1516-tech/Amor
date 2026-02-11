const startDate = new Date("2021-10-01T00:00:00"); // cambia si quieres ❤️

function updateTimer() {
  const now = new Date();
  let diff = Math.floor((now - startDate) / 1000);

  const d = Math.floor(diff / 86400);
  diff %= 86400;
  const h = Math.floor(diff / 3600);
  diff %= 3600;
  const m = Math.floor(diff / 60);
  const s = diff % 60;

  document.getElementById("timer").textContent =
    `Mi amor por ti comenzó hace ${d} días ${h} horas ${m} minutos ${s} segundos`;
}

setInterval(updateTimer, 1000);
updateTimer();

/* crear hojas del árbol (corazones) */
const leaves = document.createElement("div");
leaves.className = "leaves";
document.querySelector(".tree").appendChild(leaves);

for (let i = 0; i < 160; i++) {
  const leaf = document.createElement("div");
  leaf.className = "leaf";
  leaf.textContent = "❤️";

  const angle = Math.random() * Math.PI * 2;
  const r = Math.random() * 100;

  leaf.style.left = 130 + r * Math.cos(angle) + "px";
  leaf.style.top = 100 + r * Math.sin(angle) + "px";

  leaves.appendChild(leaf);
}

/* corazones cayendo */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart-fall";
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 200);

/* música */
function playMusic() {
  document.getElementById("music").play();
}
