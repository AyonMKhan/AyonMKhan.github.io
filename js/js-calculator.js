window.onload = function() {



//variables
var numfirst = 0;//first number
var numsecond = 0;//second number
var add = false, sub = false, mul = false, div = false;//variables to store operation
var decimal = false;//boolean variable for putting in a decimal point
var numstring = "";//string for taking input

//the display function
function disp(elid, elval) {//display elval in element with id elid
  if (elval.length > 11) {
    elval = elval.slice(0, 10);
  }

  document.getElementById(elid).innerHTML = elval;


}

//what happens when you click 1
document.getElementById('one').onclick = function() {
  numstring += '1';//add 1 to numstring
  disp('dispdiv', numstring);//display numstring in dispdiv
};

//what happens when you click 2
document.getElementById('two').onclick = function() {
  numstring += '2';
  disp('dispdiv', numstring);
};

//what happens when you click 3
document.getElementById('three').onclick = function() {
  numstring += '3';
  disp('dispdiv', numstring);
};

//what happens when you click 4
document.getElementById('four').onclick = function() {
  numstring += '4';
  disp('dispdiv', numstring);
};

//what happens when you click 5
document.getElementById('five').onclick = function() {
  numstring += "5";
  disp('dispdiv', numstring);
};

//what happens when you click 6
document.getElementById('six').onclick = function() {
  numstring += "6";
  disp('dispdiv', numstring);
};

//what happens when you click 7
document.getElementById('seven').onclick = function() {
  numstring += "7";
  disp('dispdiv', numstring);
};

//what happens when you click 8
document.getElementById('eight').onclick = function() {
  numstring += "8";
  disp('dispdiv', numstring);
};

//what happens when you click 9
document.getElementById('nine').onclick = function() {
  numstring += "9";
  disp('dispdiv', numstring);
};

//what happens when you click 0
document.getElementById('zero').onclick = function() {
  numstring += '0';
  disp('dispdiv', numstring);
};

//what happens when you click decimal
document.getElementById('dot').onclick = function() {
  if (!decimal) {
    decimal = true;
    numstring += ".";
    disp('dispdiv', numstring);
  }
};

//what happens when you click backspace
document.getElementById('clearlast').onclick = function() {
  numstring = numstring.slice(0, -1);
  disp('dispdiv', numstring);
};

//what happens when you click plus
document.getElementById('plus').onclick = function() {
  turnNum(numstring);
  //numstring = "";
  if (numfirst !== 0 && numsecond !== 0) {
    equalize(numfirst, numsecond);
  }
  add = true;
  sub = false;
  mul = false;
  div = false;
  decimal = false;
};

//what happens when you click minus
document.getElementById('minus').onclick = function() {
  turnNum(numstring);
  //numstring = "";
  if (numfirst !== 0 && numsecond !== 0) {
    equalize(numfirst, numsecond);
  }

  sub = true;
  add = false;
  mul = false;
  div = false;
  decimal = false;
};

//what happens when you click multiply
document.getElementById('multiply').onclick = function() {
  turnNum(numstring);
  //numstring = "";
  if (numfirst !== 0 && numsecond !== 0) {
    equalize(numfirst, numsecond);
  }

  mul = true;
  add = false;
  sub = false;
  div = false;
  decimal = false;
};

//what happens when you click divide
document.getElementById('divide').onclick = function() {
  turnNum(numstring);
  //numstring = "";
  if (numfirst !== 0 && numsecond !== 0) {
    //turnNum(numstring);
    equalize(numfirst, numsecond);
  }

  div = true;
  add = false;
  sub = false;
  mul = false;
  decimal = false;
};

//what happens when you click CE
document.getElementById('clearall').onclick = function() {
  numstring = "";
  disp('dispdiv', numstring);
  numfirst = 0; numsecond = 0;
  add = false, sub = false, mul = false, div = false;
};

//function to turn numstr into a floating point number
function turnNum(numstr) {
  if (numfirst === 0) {//if numfirst is empty
    numfirst = parseFloat(numstr);//store number in numfirst
  } else if (numsecond === 0) {//otherwise if numsecond is empty
    numsecond = parseFloat(numstr);//store number in numsecond
  }
  numstring = "";//set numstring to empty string
}

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

//what happens when you click equals
document.getElementById('equals').onclick = function() {
  turnNum(numstring);
  equalize();
};


//function to do a mathematical operation
function equalize() {
  decimal = false;
  if (add) {//id add is true
    numfirst = addition(numfirst, numsecond);//add numfirst and numsecond and store it in numfirst
    disp('dispdiv', numfirst);//display numfirst in dispdiv
    add = false;//set add to false
  }
  else if (sub) {
    numfirst = subtraction(numfirst, numsecond);
    disp('dispdiv', numfirst);
    sub = false;
  }
  else if (mul) {
    numfirst = multiplication(numfirst, numsecond);
    disp('dispdiv', numfirst);
    mul = false;
  }
  else if (div) {
    numfirst = division(numfirst, numsecond);
    disp('dispdiv', numfirst);
    div = false;
  }
  numsecond = 0;//set second number to 0
  numstring = "";//set numstring to empty string

}

}
