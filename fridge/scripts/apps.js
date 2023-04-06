
function seeInside() {
  getElement("fridge-inside").style.display = "block";

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
}


function browser() {
  hideAll();

  getElement("browser").style.display = "block";
}

function workInProgress() {
  hideAll();

  getElement("wip").style.display = "block";
}

function closeApp() {
  getElement("fridge-inside").style.display = "none";

  document.querySelector(".temperature").style.display = "block";
  document.querySelector(".apps").style.visibility = "visible";
  getElement("time").style.visibility = "visible";
  getElement("close-link").style.visibility = "hidden";
  getElement("browser").style.display = "none";
  getElement("spotify").style.display = "none";
  
  document.querySelectorAll("#player").forEach(value => {
    value.pause();
  });
}

function shoppingList() {
  hideAll();
}

function hideAll() {
  document.querySelector(".temperature").style.display = "none";
  document.querySelector(".apps").style.visibility = "hidden";
  getElement("time").style.visibility = "hidden";
}