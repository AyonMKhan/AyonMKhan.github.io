// variables
//length of pomodoro
var pomLen = 25;

//pomodoro length in milliseconds
var poms = pomLen * 60000;

//countdownTime
var countdownTime;// = new Date(poms);

//time to compare with countdown and to stop it
var defTime = new Date(0);

//variable to check if timer is running
var running = 0;

//variable for the timer to run every 1 sec
var timer;

//variable to see if session is complete
var seshComplete = false;

////////////////////////////////////////////////////////////////////////////////////

//function for displaying some value in a specific ElementByID
function display(elid, elval) {
  document.getElementById(elid).innerHTML=elval;
}


//function for calculating countdown time
function calcTime(pomorbrk) {
  poms = pomorbrk * 60000;
  countdownTime = new Date(poms);
}

///////////////////////////////////////////////////////////////////////////////////

//pomodoro, break and session controls


display('pomLenDisp', pomLen);

//increasing pomLen
document.getElementById('pomPlus').onclick = function() {
  pomLen += 1;
  //pomTemp = pomLen;
  display('pomLenDisp', pomLen)
  calcTime(pomLen);
};

//decreasing pomLen
document.getElementById('pomMinus').onclick = function() {
  if (pomLen > 1) {
    pomLen -= 1;
  }
  //pomTemp = pomLen;
  display('pomLenDisp', pomLen)
  calcTime(pomLen);
};


////////////////////////////////////////////////////////////////////////////////////


//function for displaying the time
function dispTime(countdownTime) {
  var min, sec;
  if (countdownTime.getMinutes() < 10){
    min = '0'+ countdownTime.getMinutes();
  } else {
    min = countdownTime.getMinutes();
  }
  if (countdownTime.getSeconds() < 10) {
    sec = '0' + countdownTime.getSeconds();
  } else{
    sec = countdownTime.getSeconds();
  }

  document.getElementById('display').innerHTML = min + ":" + sec;
}
///////////////////////////////////////////////////////////////////////////

//function for stopping the timer
var stopTimer = function() {
    window.clearInterval(timer);
    running = 0;
};


//function to start timer set to run every second i.e. 1000 milliseconds
function startTimer() {
  timer = window.setInterval(myTimer, 1000);
}


//calculating time for pomodoro
calcTime(pomLen);

//function for looping every 1 s
function myTimer() {
  running = 1;
  countdownTime = new Date(poms);
  dispTime(countdownTime);
  poms -= 1000;
    //code for stopping timer when countdownTime hits 0
  if (countdownTime.valueOf() === defTime.valueOf()) {
    stopTimer();
    //play ding here
    document.getElementById('alarm').play();
    //tag session as complete
    seshComplete = True;
  }
}






//pausing countdown
document.getElementById('pause').onclick = function() {
  stopTimer();
};


//function to call when you want to reset timer
var resetfunc = function(x) {
  stopTimer();
  calcTime(x);
  dispTime();
}

//resetting countdown
document.getElementById('reset').onclick = function() {
  resetfunc(pomLen);
}


//make it happen when you click start
document.getElementById('start').onclick  = function() {
  if (!running && countdownTime.valueOf() > defTime.valueOf()) {
    startTimer();
  }
}
