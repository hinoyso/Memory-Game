/*const cards = document.querySelectorAll('.memory-card');
let numCards = document.getElementById('num-cards');

let flippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.toggle('flip');

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;

    return;
  }
  flippedCard = false;
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.img === secondCard.dataset.img
  // condition ? true : false
  isMatch ? disableCards() : unFlipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unFlipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// IIFE (Immediately Invoked Function Expression)
// function will be executed right after its definition


(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 30); // 30 cards maximum
    card.style.order = randomPos;
  });
})();




cards.forEach(card => card.addEventListener('click', flipCard));
*/


const cardCount = document.getElementById('numOfCards');

cardCount.addEventListener('change', function () {
  const cardsNumber = cardCount.value;
})

geberateGameBoard(cardsNumber);

function geberateGameBoard(cardsNumber) {

}



