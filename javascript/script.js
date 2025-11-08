const enemies = ["Monster", "Dragon", "Goblins", "Key"];
const keyToWin = "Key";

let lifeCount = 4;
let playTime = 10;

const moves = ["forward", "right", "left"];

let heroName = "";
while (heroName == "" || heroName == null) {
  heroName = prompt("Welcome to 'Save Princess GAME'. What is your name?");
  if (heroName == null) {
    alert(`Game canceled`);
    throw "canceled";
  }
  if (heroName == "") {
    alert("Invalid name.Write your name again");
  }
}

alert(`${heroName},The princess locked in the castle. Finding ${keyToWin} will help her to escape the castle and you will win the game.`);

for (let i = 1; i <= playTime; i++) {
  let randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];

  let direction = prompt(`PlayTime ${i}: Choose your move  ${moves.join(",")}`);

  const lifeCounter = (lifeCount) => {
    alert(`${lifeCount} lives left.`);
  };

  while (moves.includes(direction) === false) {
    if (direction === null) {
      alert(`Game canceled`);
      break;
    }
    alert("Invalid move! Please choose a valid direction.");
    direction = prompt(`PlayTime ${i}: Choose your move: ${moves.join(",")}`);
  }
  if (direction === null) {
    break;
  }

  if (randomEnemy === keyToWin) {
    alert(`Yehu! You found ${keyToWin} and saved the princess.YOU WON!`);
    break;
  } else if (i <= 3) {
    alert(`You met with ${randomEnemy}!`);
    lifeCount--;
    lifeCounter(lifeCount);
    if (lifeCount <= 0) {
      alert(`YOU LOST ALL YOUR LIVES! ${randomEnemy.toUpperCase()} GOT THE PRINCESS!`);
    }
  } else if (i <= 6) {
    alert(`You met with ${randomEnemy}!`);
    lifeCount--;
    lifeCounter(lifeCount);
    if (lifeCount <= 0) {
      alert(`YOU LOST ALL YOUR LIVES! ${randomEnemy.toUpperCase()} GOT THE PRINCESS`);
      break;
    }
  } else if (i <= 9) {
    alert(`You met with ${randomEnemy}!`);
    lifeCount--;
    lifeCounter(lifeCount);
    if (lifeCount <= 0) {
      alert(`YOU LOST ALL YOUR LIVES! ${randomEnemy.toUpperCase()} GOT THE PRINCESS!`);
      break;
    }
  } else if (i === 10) {
    if (randomEnemy === keyToWin) {
      alert(`Yehu! You found the ${keyToWin} and saved the princess! YOU WON `);
    } else {
      alert(`YOU LOST ALL YOUR LIVES! ${randomEnemy.toUpperCase()} GOT THE PRINCESS!`);
      lifeCount--;
      lifeCounter(lifeCount);
      if (lifeCount <= 0) {
        alert(`YOU LOST ALL YOUR LIVES! ${randomEnemy.toUpperCase()} GOT THE PRINCESS `);
      }
    }
    break;
  }
}
