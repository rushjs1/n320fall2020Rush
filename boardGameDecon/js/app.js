$(document).ready(function() {
  superInit();
});

function superInit() {
  var turn = true;

  $(".cls-1").click(function() {
    if (turn != false) {
      turn = false;
      event.target.style.fill = "#0000ff";
      $("#banner").html("player 1 is up");
    } else {
      turn = true;
      event.target.style.fill = "#00ff00";
      $("#banner").html("player 2 is up");
    }

    console.log(turn);
  });
}
