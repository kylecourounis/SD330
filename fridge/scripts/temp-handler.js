var tempType = 0; // 0 - Fahrenheit, 1 - Celcius

function generateTemperature() {
  var temp = 32 + Math.floor(Math.random() * 10);

  getElement("temperature-value").innerHTML = temp;
}

function decreaseTemp() {
  var temp = getElement("temperature-value");
  var tempValue = parseInt(temp.innerText);

  tempValue--;

  temp.innerHTML = tempValue;
}

function increaseTemp() {
  var temp = getElement("temperature-value");
  var tempValue = parseInt(temp.innerText);

  tempValue++;

  temp.innerHTML = tempValue;
}

function convertTemperature() {
  var temp = getElement("temperature-value");
  var tempValue = parseInt(temp.innerText);

  var tempTypeElem = getElement("temperature-type");

  // Fahrenheit 
  if (tempType === 0) {
    var fToCel = (tempValue - 32) * (5/9);
    temp.innerHTML = Math.round(fToCel);
    tempTypeElem.innerHTML = "&#8451;";
    tempType = 1;
  } else if (tempType === 1) {
    var cToFahr = tempValue * (9/5) + 32;
    temp.innerHTML = Math.round(cToFahr);
    tempTypeElem.innerHTML = "&#8457;";
    tempType = 0;
  }
}