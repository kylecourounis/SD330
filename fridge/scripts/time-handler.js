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