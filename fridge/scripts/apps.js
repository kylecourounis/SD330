
function seeInside() {
  getElement("fridge-inside").style.display = "inline-block";

  hideAll();
}

function spotify() {
  hideAll();

  getElement("spotify").style.display = "block";
}

function weather() {
  hideAll();
}

function youtube() {
  hideAll();

  getElement("youtube").style.display = "block";
  getElement("youtube-vid-iframe").src = "https://www.youtube.com/embed/oi707TKSmrk";
}

function browser() {
  hideAll();

  getElement("browser").style.display = "block";
}

function workInProgress() {
  hideAll();

  getElement("wip").style.display = "block";
}

const timer = new Timer();
var interval = 0;

function startTimer() {
  hideAll();

  timer.start();
  interval = setInterval(() => {
    const timeInSeconds = Math.round(timer.getTime() / 1000);
    document.getElementById('timer-elapsed').innerText = timeInSeconds;

    if (timeInSeconds == 0) {
      var audio = new Audio("assets/sounds/ding.mp3");
      audio.play();

      clearInterval(interval);
    }
  }, 100);
}

function stopTimer() {
  timer.stop();
  document.getElementById('timer-elapsed').innerText = "";
  clearInterval(interval);
}

function shoppingList() {
  hideAll();
}

function hideAll() {
  //document.querySelector(".temperature").style.display = "none";
  //getElement("time").style.visibility = "hidden";
  document.querySelector(".apps").style.visibility = "hidden";
}

function closeApp() {
  getElement("fridge-inside").style.display = "none";

  //document.querySelector(".temperature").style.display = "block";
  //getElement("time").style.visibility = "visible";
  document.querySelector(".apps").style.visibility = "visible";
  getElement("close-link").style.visibility = "hidden";
  getElement("browser").style.display = "none";
  getElement("spotify").style.display = "none";
  
  getElement("youtube").style.display = "none";
  getElement("youtube-vid-iframe").src = "";

  stopTimer();
  
  document.querySelectorAll("#player").forEach(value => {
    value.pause();
  });
}
