const ball = document.getElementById('ball');

let x = 0;
let y = 0;
let xSpeed = 5;
let ySpeed = 5;

function updateBallPosition() {
    x += xSpeed;
    y += ySpeed;

    if (x + ball.clientWidth > window.innerWidth || x < 0) {
        xSpeed = -xSpeed;
    }

    if (y + ball.clientHeight > window.innerHeight || y < 0) {
        ySpeed = -ySpeed;
    }

    ball.style.left = x + 'px';
    ball.style.top = y + 'px';

    requestAnimationFrame(updateBallPosition);
}

ball.addEventListener('click', () => {
    // Start the animation when the ball is clicked
    requestAnimationFrame(updateBallPosition);
});