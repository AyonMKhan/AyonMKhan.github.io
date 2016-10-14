window.onload = function() {
  var startBtn = document.getElementById("start");//caching the start button
  var pauseBtn = document.getElementById("pause");//caching the pause button
  var resetBtn = document.getElementById("reset");//caching the reset button
  var strictBtn = document.getElementById("strict");//caching the strict button
  var strictBtnTxt = strictBtn.getElementsByTagName("p")[0];
  var turnDispEl = document.getElementById("turns");//caching the turns display


  var buttonCheckCounter = 0;//variable to check the no of button pressed
  var turn = 0;//no of turns currently being played
  var strict = false; //Boolean variable for strict mode
  var playerTurn = false;//players turn or not?
  var sequence = [];//variable to store the current sequence of buttons to press;
  var playerAttempt = [];//variable to store players button presses


  function displayTurn() {
    turnDispEl.innerHTML = sequence.length;
  };


    //write functions for disabling and enabling player clicks
    function enablePlayer() {//function to enable player clicks
      //for (var i = 0; i < allButtons.length; i++) {//looping through allButtons nodelist
      button1.style.pointerEvents = "auto";
      button2.style.pointerEvents = "auto";
      button3.style.pointerEvents = "auto";
      button4.style.pointerEvents = "auto";//setting pointerEvents to auto turns on click events on DOM elements
      //}
      playerTurn = true;//set playerTurn to true
    };

    function disablePlayer() {//function to disable player clicks
      //for (var i = 0; i < allButtons.length; i++) {//looping through nodelist of all the buttons
      button1.style.pointerEvents = "none";
      button2.style.pointerEvents = "none";
      button3.style.pointerEvents = "none";
      button4.style.pointerEvents = "none";//setting poinerEvents to none turns off click event for those elements
      //}
      playerTurn = false;//set playerTurn to false
    };





  function turnReset() {
    playerAttempt = [];
    buttonCheckCounter = 0;
    displayTurn();
  }

  function repeatSeq() {//function to repeat the current sequence when playing in "not strict" mode and player makes mistake

  };

  //caching buttons from dom into variables
  //var allButtons = document.getElementsbyClassName("cbutton");//caching all the buttons together in a nodelist to enable or disable click events
  var button1 = document.getElementById("left-top");
  var button2 = document.getElementById("right-top");
  var button3 = document.getElementById("left-bottom");
  var button4 = document.getElementById("right-bottom");

  //caching audios in variables from DOM
  var audio1 = document.getElementById("audio1");
  var audio2 = document.getElementById("audio2");
  var audio3 = document.getElementById("audio3");
  var audio4 = document.getElementById("audio4");



  //generate the random button to press
  function genRandBut() {
    var randNum = Math.random() * 4;
    if (randNum < 1) {
      return "button1";
    }
    else if (randNum < 2) {
      return "button2";
    }
    else if (randNum < 3) {
      return "button3";
    }
    else {
      return "button4";
    }

  };


  //function to generate the sequence based on the random button generation above
  function genSeq() {
    if (sequence.length < 20) {
      disablePlayer();
      //playerTurn = false;
      sequence.push(genRandBut());
      turn++;
    }
  };

  genSeq();


  function reset() {//function to reset the game
    //figure out how to stop the sequence from playing, figure it out
    stopSeq();
    //playerTurn = false;
    disablePlayer();
    playerAttempt = [];
    sequence = [];
    turn = 0;
    buttonCheckCounter = 0;
    displayTurn();
    strict = false;
    genSeq();

  };

    //function to generate random step to play from in strict mode
  function genStrictFailSeq() {
    reset();//reset all variables
    var i = Math.floor(Math.random() * 20) + 1;
    for (var c = 0; c < i; c++) {
      genSeq();
    };
  };




  //function to animate the buttons of different colors
  function animateButton(button) {
    switch (button) {
      case "button1":
          //animate first button and play audio
          button1.style.backgroundColor = "#fff";
          audio1.play();
          setTimeout(function() {
            button1.style.backgroundColor = "green";
          }, 500);
          break;
        case "button2":
          //animate second button and play audio
          button2.style.backgroundColor = "#fff";
          audio2.play();
          setTimeout(function() {
            button2.style.backgroundColor = "red";
          }, 500);
          break;
        case "button3":
          //animate third button and play audio
          button3.style.backgroundColor = "#fff";
          audio3.play();
          setTimeout(function() {
            button3.style.backgroundColor = "yellow";
          }, 500);
          break;
        case "button4":
          //animate fourth button and play audio
          button4.style.backgroundColor = "#fff";
          audio4.play();
          setTimeout(function() {
            button4.style.backgroundColor = "blue";
          }, 500);
          break;
    }
  }


  //function to animate the divs according to sequence
  //have a counter variable inside setInterval, increment it inside setInterval and check it with sequence length to decide if setInterval should be stopped
  var interval;//interval to pass to clearInterval to stop repeating action every 1 sec

  function playSeq() {
    var counter = 0;
    interval = setInterval(function() {//using setInterval as a loop to animate buttons!
      animateButton(sequence[counter]);//animate that button
      counter++;//increase counter by 1
      if (counter >= sequence.length) {//if sequence length is reached by counter, stop the damn sequence
        stopSeq();//stop playing the sequence
        displayTurn();
        enablePlayer();//enable the player clicks//playerTurn = true;//set playerTurn to true so that player can play
      }
    }, 1000);
  }

  //this function stops the sequence playing
  function stopSeq() {
    clearInterval(interval);
  }

  //function for checking if the button clicked is the right one
  function buttonCheck(button) {
    if (playerTurn) {//if players turn to play
      playerAttempt.push(button);//insert the button into playerAttempt array
      //buttonCheckCounter++;increase buttonCheckCounter
      animateButton(button);//animate the button and play music
      //check if player has pressed the no of buttons that need to be pressed
      //compare the sequence and playerAttempt arrays
      //check if turn is 20, then if both arrays are same then player has won the game
      if (playerAttempt[buttonCheckCounter] === sequence[buttonCheckCounter]) {//if current button press is correct
        if (playerAttempt.length < sequence.length) {//if player is still within his turn
          //wait for player to press next button
          //displayTurn();
          buttonCheckCounter++;//increase buttonCheckCounter
          //break the function so that it can run again
        }
        else {//player has finished his turn
          //increase turn if turn is less than 20
          if (playerAttempt.length === 20 && sequence.length === 20) {//if this was the 20th turn and player has completed it successfully
            alert("You Win!!");
            reset();//resetting game
            //display player wins message
            return;//break the function from executing further;
          }//player has won end bracket
          else {//turn < 20
            turnReset();//reset the turn variables
            genSeq();//increase turn
            playSeq();//then play the sequence;
          }//player is within 20 turns end bracket
        }//player has finished turn end bracket


      }
      else {//if player has made a mistake
        alert("You Made a Mistake");
        disablePlayer();
        if (strict) {//if strict mode is on
          //generate a random sequence with a random no of turns and play it, then wait
          genStrictFailSeq();
          playSeq();
        }//strict mode end bracket
        else {//strict mode is off
          //repeat the same sequence and wait for player to press button again

          turnReset();
          playSeq();//repeat the same sequence
        }//not strict mode end bracket
      }//player has made a mistake endbracket

    }//players turn to play end bracket

  }


    //when button 1 is clicked play music 1
  button1.onclick = function() {
    buttonCheck("button1");
  };
  //when button 2 is clicked play music 2
  button2.onclick = function() {
    buttonCheck("button2");
  };
  //when button 3 is clicked play music 3
  button3.onclick = function() {
    buttonCheck("button3");
  };
  //when button 4 is clicked play music 4
  button4.onclick = function() {
    buttonCheck("button4");
  };



  //testing the button gen sequence and animations
  /*for (var c = 1; c <= 20; c++) {
    genSeq();
    console.log(game.sequence);
  }


  playSeq();*/
  function play() {//start playing
    //genSeq();
    displayTurn();
    console.log(sequence);
    playSeq();
    //program flow:

  //generate random button and put it in button sequence genSeq();
  //then wait for user to click a button
  //if a button is clicked computer checks if the correct button was clicked
  //if correct button was clicked and sequence length is less than 20
  //generate one more button and add it to sequence

  //wait again
  //button check
  //if correct button was not clicked then
  //replay the sequence if mode is not strict
  //if mode is strict generate random no of sequences and start again from there

  };

  startBtn.onclick = function() {
    play();
    startBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
  };

  resetBtn.onclick = function() {
    reset();
    if (pauseBtn.style.display === "inline-block") {
      pauseBtn.style.display = "none";
      startBtn.style.display = "inline-block";
    }
  };

  pauseBtn.onclick = function() {
    stopSeq;
    pauseBtn.style.display = "none";
    startBtn.style.display = "inline-block";
  }

  strictBtn.onclick = function() {
    if(strict) {
      strict = false;
      //display Strict Off on the button
      strictBtnTxt.innerHTML = "Strict Off";
    }
    else {
      strict = true;
      //display Strict On on the button
      strictBtnTxt.innerHTML = "Strict On";
    }
  }

};
