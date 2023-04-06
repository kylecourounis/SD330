var layers = [];

function init() {
  getTime();
  generateTemperature();

  console.log(getCurrentTempOutside());
}

init();

function togglePower() {
  var powerBtnStyle = getElement("power-button").style;
  var containerStyle = getElement("container").style;

  if (containerStyle.visibility === "" || containerStyle.visibility === "hidden") {
    powerBtnStyle.filter = "invert(1)";
    containerStyle.visibility = "visible"; // Show apps
    containerStyle.display = "block";
  } else {
    closeApp();
    powerBtnStyle.filter = "";
    containerStyle.visibility = "hidden"; 
    containerStyle.display = "none";
  }
}

function openApp(name) {
  getElement("close-link").style.visibility = "visible";

  if (name === "seeInside") {
    seeInside();
  }
  
  if (name === "browser") {
    browser();
  }

  if (name === "youtube") {
    youtube();
  }

  if (name === "spotify") {
    spotify();
  }

  if (name === "weather") {
    weather();
  }

  if (name === "shopping-list") {
    shoppingList();
  }

  if (name === "timer") {
    timerApp();
  }
}

function workInProgress() {
  document.querySelector(".apps").style.visibility = "hidden";
  getElement("time").style.visibility = "hidden";

  getElement("wip").style.display = "block";
}

function getElement(id) {
  return document.getElementById(id);
}