const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// DOM Manipulation Example
document.body.onload = () => {
  const msg = document.createElement("p");
  msg.textContent = "Welcome to my portfolio!";
  document.body.appendChild(msg);
};
