const API_KEY = "655bd266f39d4393193b4203c7ddce71";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weatherContainer = document.querySelector(".metric-stat-number");
      const cityContainer = document.querySelector(".metric-location-name");

      weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      cityContainer.innerText = data.name;
    })
  );
}

function onGeoError() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
