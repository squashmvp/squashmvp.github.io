const gameInfo = document.getElementById("game-info");
  prevGame = document.getElementById("prev");
  nextGame = document.getElementById("next");

prevGame.addEventListener("click", async function () {
  const response = await fetch("https://github.com/squashmvp/Garden/blob/main/text/Coleco%20Games.json");
  const coleco = await response.json();
  console.log(coleco);
});
