const newDv = document.getElementById("banner");
const player1 = 1;
const player2 = 2;
var turn = true;
let emptySpaceFound = false;

const grid = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

const allcirs = document.querySelectorAll("circle");
//creates a new array from iterable object
const newSpotArr = Array.from(allcirs);
console.log(allcirs);

//make a new grid of the old grid just reversed

let newGrid = grid.reverse();
console.log(newGrid);

//for each circle element in the html
allcirs.forEach(circle => {
  // add eventlistener for each circle
  circle.addEventListener("click", e => {
    const spot = event.target;
    //get data attribues of rows and cols
    const newSpotRow = spot.getAttribute("data-row");
    const newSpotCol = spot.getAttribute("data-col");

    const newSpot = { newSpotRow, newSpotCol };

    console.log(newSpot);

    console.log(grid[newSpotRow]);

    // flipping the turn boolean upon each click
    turn = !turn;

    console.log(newGrid);
    if (turn != true) {
      banner.innerHTML = "Player 2 is now up";

      spot.style.fill = "#0FF7";
      newGrid[newSpotRow].splice(newSpotCol, 1, 2);
      checkGrid();
    } else {
      banner.innerHTML = "Player 1 is up";

      spot.style.fill = "#5D009F";
      newGrid[newSpotRow].splice(newSpotCol, 1, 1);
      checkGrid();
    }

    function checkGrid() {
      for (var row = 0; row < newGrid.length; row++) {}
    }
  });
});
