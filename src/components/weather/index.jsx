import { useState, useEffect } from "react";
import SearchBar from "../search";

export default function Weather() {
  const [info, setInfo] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`;

  async function fetchUrl(comingUrl) {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(comingUrl);
      const data = await response.json();
      setInfo(data);
      setLoading(false);
      setError(false);
      console.log(data);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUrl(url);
  }, [url]);

  if (loading) {
    return <div>Loading pls wait....</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="app-container">
      {/* <div className="weather-card">
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
      </div> */}
    </div>
  );
}
