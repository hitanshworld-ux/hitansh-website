function startCelebration() {
  // Confetti
  const colors = ["#ff6b8a", "#ffb347", "#74c0fc", "#63e6be", "#cc5de8"];

  for (let i = 0; i < 250; i++) {
    const c = document.createElement("div");
    c.className = "confetti-piece";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = (2 + Math.random() * 3) + "s";
    document.body.appendChild(c);

    setTimeout(() => c.remove(), 5000);
  }

  // Balloons
  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement("div");
    balloon.innerHTML = "🎈";
    balloon.style.position = "fixed";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.bottom = "-50px";
    balloon.style.fontSize = (30 + Math.random() * 20) + "px";
    balloon.style.zIndex = "9999";
    balloon.style.transition = "transform 6s linear";

    document.body.appendChild(balloon);

    setTimeout(() => {
      balloon.style.transform = "translateY(-120vh)";
    }, 100);

    setTimeout(() => balloon.remove(), 6500);
  }

  // Celebration Message
  const msg = document.createElement("div");
  msg.innerHTML = "🎉 Happy 15 Months Hitansh! 💙";
  msg.style.position = "fixed";
  msg.style.top = "50%";
  msg.style.left = "50%";
  msg.style.transform = "translate(-50%,-50%)";
  msg.style.background = "#ff4081";
  msg.style.color = "#fff";
  msg.style.padding = "20px 30px";
  msg.style.borderRadius = "20px";
  msg.style.fontSize = "28px";
  msg.style.fontWeight = "bold";
  msg.style.zIndex = "10000";
  msg.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 4000);

  // Optional sound
  const audio = new Audio("celebrate.mp3");
  audio.play().catch(() => {});
}
