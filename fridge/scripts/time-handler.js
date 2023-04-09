var timeType = 24;

function getTime() {
  var now = new Date();

  if (timeType === 12) {
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    var hrs = (hours + 11) % 12 + 1;
    var mins = (minutes < 10) ? "0" + minutes : minutes;
    var secs = (seconds < 10) ? "0" + seconds : seconds;
  
    document.getElementById("time").innerHTML = `${hrs}:${mins}:${secs} ${hours >= 12 ? "PM" : "AM"}`;
  
    setTimeout(getTime, 1000);
  } else if (timeType == 24) {
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    var mins = (minutes < 10) ? "0" + minutes : minutes;
    var secs = (seconds < 10) ? "0" + seconds : seconds;
  
    document.getElementById("time").innerHTML = `${now.getHours()}:${mins}:${secs}`;
  
    setTimeout(getTime, 1000);
  }
}

function convertTime() {
  if (timeType == 12) {
    timeType = 24;
  } else if (timeType == 24) {
    timeType = 12;
  }
}

var duration = 0;

function increaseTimer(secs) {
  duration += secs;
  
  var start = Date.now(),
  diff,
  minutes,
  seconds;

  // get the number of seconds that have elapsed since 
  // startTimer() was called
  diff = duration - (((Date.now() - start) / 1000) | 0);

  // does the same job as parseInt truncates the float
  minutes = (diff / 60) | 0;
  seconds = (diff % 60) | 0;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  getElement("timer-elapsed").textContent = minutes + ":" + seconds; 
}

function decreaseTimer(secs) {
  if (duration > 0 && secs > 0) {
    duration -= secs;

    var start = Date.now(),
        diff,
        minutes,
        seconds;
  
    // get the number of seconds that have elapsed since 
    // startTimer() was called
    diff = duration - (((Date.now() - start) / 1000) | 0);
  
    // does the same job as parseInt truncates the float
    minutes = (diff / 60) | 0;
    seconds = (diff % 60) | 0;
  
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    getElement("timer-elapsed").textContent = minutes + ":" + seconds; 
  }
}

var timerIntervalId = 0;

function startTimer() {
  var start = Date.now(),
      diff,
      minutes,
      seconds;
  function timer() {
      // get the number of seconds that have elapsed since 
      // startTimer() was called
      diff = duration - (((Date.now() - start) / 1000) | 0);

      // does the same job as parseInt truncates the float
      minutes = (diff / 60) | 0;
      seconds = (diff % 60) | 0;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      getElement("timer-elapsed").textContent = minutes + ":" + seconds; 

      if (diff <= 0) {
          // add one second so that the count down starts at the full duration
          // example 05:00 not 04:59
          start = Date.now() + 1000;
      }

      if (minutes == 0 && seconds == 0) {
        clearInterval(timerIntervalId);

        var audio = new Audio("assets/sounds/ding.mp3");
        audio.play();
      }
  };
  // we don't want to wait a full second before the timer starts
  timer();
  timerIntervalId = setInterval(timer, 1000);
}
