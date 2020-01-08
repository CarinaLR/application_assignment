fetch('/quote')
  .then(r => r.json())
  .then(data => {
    document.getElementById('quote').innerText = data.quote;
  });

const data = [
  "It's just a flesh wound.",
  'I am just one stomach flu away from my goal weight.',
  'I am serious.',
  'That is my least vulnerable spot.',
  'We get the warhead and we hold the world ransom for…. One million dollars.',
];

function provideQuote() {
  const Quote1 = shuffle(data);
  document.querySelector('#quote > h2').innerHTML = Quote1;
  return Quote1;
}

function shuffle(data) {
  for (let i = data.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = data[i];
    data[i] = data[randomIndex];
    data[randomIndex] = temp;
  }
  return data;
}

function playGame() {
  //storage anspecific element fromt he html file and link it to a addEventListener.
  const playAgain = document.getElementById('playAgain');

  playAgain.addEventListener('click', function() {
    shuffle();
  });
}
// start up the game!
playGame();
