const play = document.querySelector('.about__play');
const video = document.querySelector('.about__video video');

play.addEventListener('click', () => {
  video.play();
  video.setAttribute('controls', true);
  play.classList.add('about__play-hidden');
});

// menu
const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

function scrollToggle() {
  document.body.classList.toggle('lock');
}

burger.addEventListener('click', () => {
  menu.classList.add("open");
  overlay.classList.add('open');
  scrollToggle();
})

overlay.addEventListener('click', () => {
  menu.classList.remove("open");
  overlay.classList.remove('open');
  scrollToggle();
})