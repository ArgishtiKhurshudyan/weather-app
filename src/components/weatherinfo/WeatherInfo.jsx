import React, {useState} from 'react';
import "./weatherinfo.scss"
import {Link} from "react-router-dom";

const WeatherInfo = ({locationData}) => {
  const [tempMode, setTempMode] = useState(false)
  return (
    <div className="weather-info-container">
      <div className="info-header">
        <div className="titles">
          <Link to="favoriteCities" style={{textDecoration: "none"}}><p>Favorite cities</p></Link>
          <Link to="fivedaysinfo" style={{textDecoration: "none"}}><p className="next-days">Next 5 days</p></Link>
          <div className="mode_temperature">
            <button className={tempMode ? "left" : "right"}
                    onClick={(e) => setTempMode(!tempMode)}>{tempMode ? "F" : "C"}&#176;</button>
          </div>
        </div>
      </div>
      <div className="info-days">
        <div className="current-day">
          <div className="title-day">
            <h2>{locationData.name}</h2>{locationData.sys ?
            <h2 style={{color: "white"}}>{locationData.sys.country}</h2> : null}
          </div>
          <div className="temperature-description">
            <div className="temp-degree">
              <div className="number-temp">
                {locationData.main ? tempMode ? <h1> {locationData.main.temp.toFixed()}F&#176;</h1> :
                  <h1> {(locationData.main.temp / 10).toFixed()}C&#176;</h1> : null}
              </div>
              {locationData.main ?
                tempMode ?
                  <span><small>Real Feel </small>{locationData.main.feels_like.toFixed()}F&#176;</span> :
                  <span><small>Real Feel </small>{(locationData.main.feels_like / 11).toFixed()}C&#176;</span> : null}
              {locationData.main ? <span><small>Wind: N-E, </small>{locationData.wind.speed}km/h</span> : null}
              {locationData.main ? <span><small>Pressure: </small>{locationData.main.pressure}Mb</span> : null}
              {locationData.main ? <h3>Humidity {locationData.main.humidity}%</h3> : null}
            </div>
            <img src="http://openweathermap.org/img/wn/10d@2x.png"/>
          </div>
        </div>
        {locationData.weather ? <h1 style={{color: "white"}}>{locationData.weather?.[0].main}</h1> : null}
        <div className="next-day-item">
          <img src="http://openweathermap.org/img/wn/10d@2x.png"/>
          <hr/>
          {locationData.wind ? <span style={{color: "silver"}}>wind deg {locationData.wind.deg} &#176;</span> : null}
          <div className="number-temp">
            {locationData.weather ? <h3 style={{color: "aqua"}}>{locationData.weather?.[0].description}</h3> : null}
          </div>
        </div>
        <div className="next-day-item">
          <h1>Sea level</h1>
          <hr/>
          {locationData.main ? <h2 style={{color: "white"}}>{locationData.main.sea_level}m</h2> : null}
        </div>
      </div>
      <div style={{width: "100%"}}>
        <img style={{width: "60%", height: "350px", borderRadius: "20px", marginLeft: "475px"}}
             src="https://i.gifer.com/AhdA.gif"/>
      </div>
    </div>
  );
};

export default WeatherInfo;
