"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;

// Event Listeners
yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("mouseover", () => {
  if (noCount >= MAX_IMAGES) {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }
});

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    
    if (noCount === MAX_IMAGES) {
      play = false;
      noButton.style.transform = "translate(0, 0)";
    }
  }
});

// Funciones
function handleYesClick() {
  const loadingScreen = document.querySelector('.loading-screen');
  const loadingText = document.querySelector('.loading-text');
  
  // Mostrar mensaje inicial y ocultar botones
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
  triggerConfetti();

  // Esperar 1 segundo antes de mostrar la carga
  setTimeout(() => {
    // Ocultar elementos anteriores
    titleElement.classList.add('hidden');
    catImg.classList.add('hidden');
    
    // Mostrar pantalla de carga
    loadingScreen.classList.remove('hidden');
    loadingScreen.classList.add('show');
    
    // Redirección después de 5 segundos totales
    setTimeout(() => {
      window.location.href = 'carta.html';
    }, 4000); // 4000ms + 1000ms inicial = 5 segundos
  }, 1000);
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const newFontSize = parseFloat(computedStyle.fontSize) * 1.6;
  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Estas segura?",
    "Porfis :c",
    "Voy a llorar :(",
    "Me voy a morir",
    "Enserio moriré....",
  ];
  return messages[Math.min(noCount, messages.length - 1)];
}

function changeImage(image) {
  catImg.src = `images/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.textContent = generateMessage(noCount);
}

function triggerConfetti() {
  if (window.confetti) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
}