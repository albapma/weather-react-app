import React, { useState } from "react";
import Forecast from "./Forecast";
import axios from "axios";

export default function Temperature(props) {
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: { props.value },
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      city: { props.place },
      date: "Wednesday 07:00",
      humidity: response.data.main.humidity,
    });
  }
  if (weatherData.ready) {
    return (
      <div>
        <div class="d-flex weather-temperature">
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
            id="icon"
          />
          <div class="temperature-info">
            <strong id="degrees">{Math.round(weatherData.temperature)} </strong>
            <span class="units" id="celsius">
              °C{" "}
            </span>
          </div>
        </div>
        <Forecast />
      </div>
    );
  } else {
    let city = "Malaga";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8c78e9e7e9928cd1a2a6f923072c3dec&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return "Loading..";
  }
}
