import React from "react";
import Forecast from "./Forecast";

export default function Temperature() {
  return (
    <div class="d-flex weather-temperature">
      <img
        src="http://openweathermap.org/img/wn/10d@2x.png"
        alt="description"
        id="icon"
      />
      <div class="temperature-info">
        <strong id="degrees">20 </strong>
        <span class="units" id="celsius">
          °C{" "}
        </span>
      </div>
      <Forecast />
    </div>
  );
}
