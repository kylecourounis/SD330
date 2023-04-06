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
  
    document.getElementById("time").innerHTML = `${hrs}:${mins}:${secs} ${hrs >= 12 ? "PM" : "AM"}`;
  
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

class Timer {
  constructor () {
    this.isRunning = false;
    this.time = 60000;
  }

  _getTimeElapsedSinceLastStart () {
    if (!this.time) {
      return 0;
    }
  
    return Date.now() - this.time;
  }

  start () {
    if (this.isRunning) {
      return console.error('Timer is already running');
    }

    this.isRunning = true;

    this.interval = setInterval(() => {
      if (this.time > 0) {
        this.time -= 100;
      }
    }, 100);
  }

  stop () {
    this.isRunning = false;
    clearInterval(this.interval);
    this.reset();
  }

  reset () {
    this.time = 60000;
  }

  getTime () {
    return this.time;
  }
}