import SearchBar from "../search";

export default function Weather() {
  return (
    <div className="app-container">
      <div className="weather-card">
        <SearchBar />

        <div className="weather-info">
          <h2 className="city">Bengaluru, IN</h2>
          <p className="date">Sunday, December 17, 2023</p>
          <h1 className="temp">294.95</h1>
          <p className="condition">mist</p>

          <div className="climate-details">
            <div className="details">
              <p className="value">3.6</p>
              <p className="label">Wind Speed</p>
            </div>
            <div className="details">
              <p className="value">88%</p>
              <p className="label">Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
