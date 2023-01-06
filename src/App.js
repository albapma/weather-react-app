import "./App.css";
import City from "./City";
import Temperature from "./Temperature";
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
            <li id="date">Wednesday 16:00</li>
            <li id="weather-description">Cloudy</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Wind: 20km/h <span id="wind"></span> km/h
            </li>
            <li>
              Humidity:89% <span id="humidity"></span> %
            </li>
          </ul>
        </div>
      </div>
      <Temperature />
    </div>
  );
}
