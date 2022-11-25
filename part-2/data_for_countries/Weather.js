import React from "react";

const Weather = (props) => {
  const { weather, weatherData } = props;
  return (
    <>
      {weather && (
        <div>
          <h2>
            temperature {(weatherData.main.temp - 273.15).toFixed(1)} celcius{" "}
          </h2>
          <h2>wind {weatherData.wind.speed}m/s</h2>
        </div>
      )}
    </>
  );
};

export default Weather;
