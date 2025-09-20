import { useState, useEffect } from "react";
import SearchBar from "../search";

export default function Weather() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=bengaluru&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`;

  async function fetchUrl(comingUrl) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(comingUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setInfo(data);
      setLoading(false);
      setError(null);
      console.log(data);
    } catch (e) {
      setLoading(false);
      setError(e.message);
      setInfo(null);
    }
  }

  useEffect(() => {
    fetchUrl(url);
  }, [url]);

  if (loading) return <div>Loading pls wait....</div>;
  if (error !== null) return <div>Error occured {error}</div>;

  function currentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <div className="app-container">
      <div className="weather-card">
        <SearchBar />

        <div className="weather-info">
          <h2 className="city">
            {info && info.name}, {info?.sys?.country}
          </h2>
          <p className="date">{currentDate()}</p>
          <h1 className="temp">{info && info.main?.temp}</h1>
          <p className="condition">
            {info && info.weather && info.weather[0]
              ? info.weather[0].description
              : ""}
          </p>

          <div className="climate-details">
            <div className="details">
              <p className="value">{info?.wind?.speed}</p>
              <p className="label">Wind Speed</p>
            </div>
            <div className="details">
              <p className="value">{info?.main?.humidity}%</p>
              <p className="label">Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
