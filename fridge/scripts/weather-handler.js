const FORECAST_URL = "https://api.weather.gov/gridpoints/ALY/73,19/forecast";

async function getCurrentTempOutside() {
  var response = await fetch(FORECAST_URL);
  var json = await response.json();

  return json;
}

const getTemperature = async () => {
  let jsonData = await getCurrentTempOutside();
  return jsonData["properties"]["periods"][0]["temperature"];
}