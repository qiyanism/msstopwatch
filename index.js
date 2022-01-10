const timer = document.getElementById('stopwatch');

var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;
var stoptime = true;
var ms = 0;

function startTimer() {
  if(stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if(stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if(stoptime == false) {
    
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    msec = parseInt(msec);

    msec = msec + 4;

    if(msec == 1000) {
        sec = sec + 1;
        msec = 0
    }

    if(sec == 60) {
      min = min + 1;
      sec = 0;
      msec = 0;
    }
    if(min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
      msec = 0;
    }
    
    

    if(sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if(min < 10 || min == 0) {
      min = '0' + min;
    }
    if(hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    ms = parseInt(msec/10);

    if(ms < 10) {
        ms = '0' + ms;
    }
  
    timer.innerHTML = hr + ':' + min + ':' + sec + ':' + ms;
    
    setTimeout("timerCycle()", 4);
  }
}

function resetTimer() {
    timer.innerHTML = "00:00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
    msec = 0;
    ms = 0
}