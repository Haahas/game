// Your existing variables
let score = 0;
let time = 10;

const heart = document.getElementById("heart");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const game = document.getElementById("game");

// Make sure heart can move
heart.style.position = "absolute";  // <---- IMPORTANT

// Timer countdown
const countdown = setInterval(() => {
    time--;
    timerDisplay.textContent = time;

    if (time <= 0) endGame();
}, 1000);

// Score when heart clicked
heart.onclick = () => {
    score++;
    scoreDisplay.textContent = "Score: " + score;
};

// Move heart randomly every 500ms
setInterval(() => {
    const maxX = game.clientWidth - heart.offsetWidth;
    const maxY = game.clientHeight - heart.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    heart.style.left = randomX + "px";
    heart.style.top = randomY + "px";
}, 500);

function endGame() {
    clearInterval(countdown);
    alert("Game Over! Your score: " + score);
}