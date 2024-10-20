function gaming(vary) {
  const thegame = document.querySelector(vary);

  if (!thegame.classList.contains('remove-style')) {
    turnOffPreviousButton();

    thegame.classList.add('remove-style');
  } else {
    thegame.classList.remove('remove-style');
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.remove-style');
  if (previousButton) {
    previousButton.classList.remove('remove-style');
  }
}