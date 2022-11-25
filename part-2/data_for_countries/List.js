import React, { useState } from "react";

const List = (props) => {
  const { results, weatherData, onChangeHandler } = props;
  const [lang, setLang] = useState("");

  return (
    <ul>
      {results.length === 1 ? (
        <>
          <h2>{results[0].name.common}</h2>
          <li>Capital: {results[0].capital}</li>
          <li>Population: {results[0].population}</li>
          <ul>
            {Object.values(results[0].languages).map((language) => (
              <li key={language}>Languages: {language}</li>
            ))}
          </ul>
          <img width="150px" src={results[0].flags.png} alt="flags" />
          <br />
          <img
            width="200px"
            src={
              weatherData.weather
                ? `http://openweathermap.org/img/wn/${weatherData.weather[0]["icon"]}@2x.png`
                : null
            }
            alt="icon"
          />
          <br />
          <h1>Weather in : {results[0].capital}</h1>
        </>
      ) : results.length <= 10 && results.length ? (
        results.map((result) => (
          <div key={result.name.common}>
            <h2>{result.name.common}</h2>
            <button onClick={() => onChangeHandler(result.name.common)}>
              show
            </button>
          </div>
        ))
      ) : (
        <p>Please fine tune your search</p>
      )}
    </ul>
  );
};

export default List;
