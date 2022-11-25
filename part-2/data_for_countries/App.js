import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Weather";
import List from "./List";

const App = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [countries, setCountries] = useState([]);
  const [results, setResults] = useState([]);
  const [weather, setWeather] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  const get_countries_data = async () => {
    try {
      const { data } = await axios("https://restcountries.com/v3.1/all");
      setCountries(data);
    } catch (error) {
      console.warn(error);
    }
  };

  const getLocation = async (lat, lon) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const { data } = await axios.get(URL);
    setWeatherData(data);
    setWeather(true);

    try {
    } catch (error) {}
  };

  useEffect(() => {
    get_countries_data();
  }, []);

  const onChangeHandler = (name) => {
    setWeather(false);
    console.log("name", name);
    let filteredResults;
    if (name !== "" && countries.length > 0) {
      filteredResults = countries.filter((country) =>
        country.name.common.toLowerCase().includes(name.toLowerCase())
      );

      if (filteredResults.length <= 10) {
        setResults(filteredResults);
      }
    } else {
      setResults([]);
    }

    if (filteredResults.length === 1) {
      const coOrdinates = {
        lat: filteredResults[0].latlng[0],
        lon: filteredResults[0].latlng[1],
      };

      getLocation(coOrdinates.lat, coOrdinates.lon);
    }
  };

  return (
    <div>
      <h1>Countries</h1>
      <label htmlFor="search">find countries</label>
      <input
        id="search"
        type="text"
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      <List
        results={results}
        weatherData={weatherData}
        onChangeHandler={onChangeHandler}
      />

      <Weather weather={weather} weatherData={weatherData} />
    </div>
  );
};

export default App;
