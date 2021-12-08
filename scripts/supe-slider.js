const supeContainer = document.querySelector(".home__superhero");
const cards = document.querySelectorAll(".card--superhero");
const btnLeft = document.getElementById("btn--arrow-left");
const btnRight = document.getElementById("btn--arrow-right");

//state
let currentCard = 0;

function validateCurrentCardState() {
  if (currentCard >= cards.length) {
    currentCard = 0;
  } else if (currentCard < 0) {
    currentCard = cards.length - 1;
  }
}

function renderCurrentCard() {
  validateCurrentCardState();

  cards.forEach((card, index) => {
    if (index != currentCard) {
      card.setAttribute("hidden", true);
    } else if (index == currentCard) {
      card.removeAttribute("hidden");
    }
  });
}

btnLeft.addEventListener("click", () => {
  currentCard--;
  renderCurrentCard();
});
btnRight.addEventListener("click", () => {
  currentCard++;
  renderCurrentCard();
});

supeContainer.addEventListener("keydown", (e) => {
  const ARROW_LEFT = 37;
  const ARROW_RIGHT = 39;

  if (e.keyCode === ARROW_LEFT) {
    currentCard--;
    renderCurrentCard();
  } else if (e.keyCode == ARROW_RIGHT) {
    currentCard++;
    renderCurrentCard();
  }
});
