import "./App.css";
import City from "./City";
import Temperature from "./Temperature";
import axios from "axios";

export default function App() {
  return (
    <div className="Weather">
      <div className="col-6">
        <form id="place">
          <input type="text" placeholder="Enter your city" id="search" />
        </form>
      </div>
      <div className="col-6">
        <button type="button" id="searchButton" class="btn btn-primary">
          Search
        </button>

        <button type="button" id="current" class="btn btn-secondary">
          Current
        </button>
      </div>

      <City />

      <div className="row">
        <div className="col-6">
          <ul>
            <li id="date">{weatherData.date}</li>
            <li className="text-capitalize" id="weather-description">
              {weatherData.description}
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Wind:{weatherData.wind}km/h <span id="wind"></span> km/h
            </li>
            <li>
              Humidity:{weatherData.humidity}% <span id="humidity"></span> %
            </li>
          </ul>
        </div>
      </div>
      <Temperature />
    </div>
  );
}
