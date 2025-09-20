import { useState, useEffect } from "react";
import SearchBar from "../search";

export default function Weather() {
  const [info, setInfo] = useState(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = "e34b4c51d8c2b7bf48d5217fe52ff79e";

  async function fetchUrl(cityName) {
    if (!cityName) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error(`City not found (${response.status})`);
      }

      const data = await response.json();
      setInfo(data);
    } catch (e) {
      setError(e.message);
      setInfo(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUrl("vijayawada");
  }, []);

  function currentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  function handleSearch() {
    fetchUrl(search);
  }

  return (
    <div className="app-container">
      <div className="weather-card">
        <SearchBar
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />

        {loading && <div>Loading... please wait.</div>}
        {error && <div className="error">Error: {error}</div>}

        {info && !error && (
          <div className="weather-info">
            <h2 className="city">
              {info.name}, {info?.sys?.country}
            </h2>
            <p className="date">{currentDate()}</p>
            <h1 className="temp">{info.main?.temp}°C</h1>
            <p className="condition">{info.weather?.[0]?.description || ""}</p>

            <div className="climate-details">
              <div className="details">
                <p className="value">{info.wind?.speed} m/s</p>
                <p className="label">Wind Speed</p>
              </div>
              <div className="details">
                <p className="value">{info.main?.humidity}%</p>
                <p className="label">Humidity</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
