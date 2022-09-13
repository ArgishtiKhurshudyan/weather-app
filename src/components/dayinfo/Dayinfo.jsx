import React from 'react';
import "./dayinfo.scss"

const Dayinfo = ({target}) => {
  return (
    <div className="info-container">
      <div
        className={`weather ${target.weather}`}>
        <h1>{target.month}</h1>
        {target.weather ? <h3>Weather: {target.weather}</h3> : null}
        {target.temp ? <h3>Temp: {target.temp} &#176; F</h3> : null}
        {target.humidity ? <h2>Humidity: {target.humidity} % </h2> : null}
      </div>
    </div>
  );
};

export default Dayinfo;
