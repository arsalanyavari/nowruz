//_____________________________________
// swimming fish
// code by https://codepen.io/kitjenson/pen/vqOgGo
var box = document.getElementById("fish_area");
var audio = new Audio('Norouz.mp3');

var fx = 0;
var fy = 0;

function moveFish() {
  var fx = parseInt(document.getElementById("fish").style.left);
  var fy = parseInt(document.getElementById("fish").style.top);
  var x = Math.floor(Math.random() * (box.offsetWidth - 40));
  var y = Math.floor(Math.random() * box.offsetHeight);
  //   console.log(box, box.offsetWidth, x, "/", box.offsetHeight , y)

  document.getElementById("fish").style.left = x + "px";
  document.getElementById("fish").style.top = y + "px";

  if (fx > x) {
    document.getElementById("fish").className = "flip";
  } else {
    document.getElementById("fish").className = "unFlip";
  }
  //   changeFishColor()
}
moveFish();
setInterval(moveFish, 1000 * 4);

function bubs() {
  var bub = document.createElement("div");
  var water = document.getElementById("water");

  bub.className = "bubbles";
  bub.style.left = Math.floor(Math.random() * water.offsetWidth) + "px";
  bub.style.animationDelay = Math.floor(Math.random() * 20) + "s";
  bub.style.width = Math.floor(Math.random() * 10) + "px";
  bub.style.height = bub.style.width;
  bub.onmouseover = function () {
    bub.style.animation = "none";
    setTimeout(function () {
      bub.style.animation = "bubble 20s linear infinite";
    }, 150);
  };
  if (parseInt(bub.style.width) < 5) {
    bub.style.zIndex = "-1";
    bub.style.filter = "blur(1px)";
  }
  document.getElementById("bowl_container").appendChild(bub);

  if (document.getElementsByClassName("bubbles").length > 20) {
    clearInterval(bubbles);
  }
}
bubs();
var bubbles = setInterval(bubs, 15);

// ______________________________________________

var btn = document
  .getElementById("confettiBtn")
  .addEventListener("click", function () {
    audio.play();
    document.getElementById("overlay").classList.toggle("hidden");

    createConfetti();
  });

function createConfetti() {
  confetti({
    particleCount: 150,
    spread: 180
  });
}

