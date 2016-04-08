const seedElement = document.querySelector('seed-element');

document.querySelector('#saybtn').addEventListener('click', () => {
  alert(seedElement.sayHello('Hallo!'));
});

document.querySelector('#laserbtn').addEventListener('click', () => {
  seedElement.fireLasers();
});

document.addEventListener("seed-element-lasers", e => {
  console.log(e.detail.sound);
});
