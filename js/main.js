// script.js

const windowEl = document.getElementById('about-window');
const titleBar = windowEl.querySelector('.title-bar');
let isDragging = false;
let offsetX, offsetY;

titleBar.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - windowEl.offsetLeft;
  offsetY = e.clientY - windowEl.offsetTop;
});

document.addEventListener('mouseup', () => isDragging = false);

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    windowEl.style.left = `${e.clientX - offsetX}px`;
    windowEl.style.top = `${e.clientY - offsetY}px`;
  }
});

// Close button
document.querySelector('.close-btn').addEventListener('click', () => {
  windowEl.style.display = 'none';
});

// Clock
function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  clock.textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}
setInterval(updateClock, 1000);
updateClock();
