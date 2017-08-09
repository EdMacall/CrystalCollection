$(document).ready(function() {
  var goal, score, redGem, blueGem, yellowGem, greenGem;
  var wins = 0;
  var losses = 0;
  var goalDisp = $("#goalDisp");
  var scoreDisp = $("#scoreDisp");
  var winsDisp = $("#winsDisp");
  var lossesDisp = $("#lossesDisp");
  var gameOver;
  var userGuess;

  function init() {
    goal      = Math.floor(Math.random() * 80) + 20;
    redGem    = Math.floor(Math.random() * 12) + 1;
    blueGem   = Math.floor(Math.random() * 12) + 1;
    yellowGem = Math.floor(Math.random() * 12) + 1;
    greenGem  = Math.floor(Math.random() * 12) + 1;
    score     = 0;
    gameOver  = false;
    goalDisp.text("Goal: " + goal);
    scoreDisp.text("Your Score: " + score);
  }

  $(".buttons").on("click", function(){
  	executeTurn(1);
  });

  $(".blue-button").on("click", function(){
  	executeTurn(1);
  });

  $(".yellow-button").on("click", function(){
  	executeTurn(1);
  });

  $(".green-button").on("click", function(){
  	executeTurn(1);
  });

  document.onkeyup = function(event) {
      // Determines which key was pressed.
      userGuess = event.key.toLowerCase();
      if (userGuess === "r")
      {
        executeTurn(redGem);
      }
      else if (userGuess === "b")
      {
        executeTurn(blueGem);
      }
      else if (userGuess === "y")
      {
        executeTurn(yellowGem);
      }
      else if (userGuess === "g")
      {
        executeTurn(greenGem);
      }
  };

  function executeTurn(x) {
    score += x;
    scoreDisp.text("Your Score: " + score);

    if(score > goal)
    {
      losses++;
      lossesDisp.text("Losses: " + losses);
      alert("You lost!!!");
      init();
    }
    else if(score === goal)
    {
      wins++;
      winsDisp.text("Wins: " + wins);
      alert("You won!!!");
      init();
    }
  }

  function updateDisplay() {
    scoreDisp.text("Your Score: " + score);
  }

  init();
});