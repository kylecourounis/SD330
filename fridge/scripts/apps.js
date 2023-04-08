
function seeInside() {
  getElement("fridge-inside").style.display = "inline-block";

  hideAll();
}

function spotify() {
  hideAll();

  getElement("spotify").style.display = "block";
}

function timerApp() {
  hideAll();

  getElement("timer").style.display = "block";
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

async function weather() {
  hideAll();

  currentTemperatureOutside = await getTemperature();

  getElement("weather").style.display = "block";
  getElement("weather").innerHTML = "Current Temperature Outside: " + currentTemperatureOutside + " &#8457;";
}


function stopTimer() {
  clearInterval(timerIntervalId);
}

function shoppingList() {
  hideAll();

  getElement("shopping-list").style.display = "block";
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
  getElement("timer").style.display = "none";
  
  getElement("youtube").style.display = "none";
  getElement("youtube-vid-iframe").src = "";

  getElement("weather").style.display = "none";

  getElement("shopping-list").style.display = "none";
  
  stopTimer();
  
  document.querySelectorAll("#player").forEach(value => {
    value.pause();
  });
}
