const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesScale = 1;

function moveNoButton() {
  const container = document.querySelector(".buttons");

  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  // Grow Yes button
  yesScale += 0.1;
  yesBtn.style.transform = `scale(${yesScale})`;
}

// Desktop hover
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile touch
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

// When Yes is clicked
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      font-size:2rem;
      color:white;
      text-align:center;
      background: linear-gradient(135deg, #ff4d6d, #ff758f);
    ">
      Yay!! 💖🥰<br/>I knew you'd say yes!
    </div>
  `;
});
