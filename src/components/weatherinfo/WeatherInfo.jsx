import React, {useState} from 'react';
import "./weatherinfo.scss"
import {Link} from "react-router-dom";

const WeatherInfo = ({currentData}) => {
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
            <h2>{currentData.name}</h2>{currentData.sys ?
            <h2 style={{color: "white"}}>{currentData.sys.country}</h2> : null}
          </div>
          <div className="temperature-description">
            <div className="temp-degree">
              <div className="number-temp">
                {currentData.main ? tempMode ? <h1> {currentData.main.temp.toFixed()}F&#176;</h1> :
                  <h1> {(currentData.main.temp / 10).toFixed()}C&#176;</h1> : null}
              </div>
              {currentData.main ?
                tempMode ?
                  <span><small>Real Feel </small>{currentData.main.feels_like.toFixed()}F&#176;</span> :
                  <span><small>Real Feel </small>{(currentData.main.feels_like / 11).toFixed()}C&#176;</span> : null}
              {currentData.main ? <span><small>Wind: N-E, </small>{currentData.wind.speed}km/h</span> : null}
              {currentData.main ? <span><small>Pressure: </small>{currentData.main.pressure}Mb</span> : null}
              {currentData.main ? <h3>Humidity {currentData.main.humidity}%</h3> : null}
            </div>
            <img src="http://openweathermap.org/img/wn/10d@2x.png"/>
          </div>
        </div>
        {currentData.weather ? <h1 style={{color: "white"}}>{currentData.weather?.[0].main}</h1> : null}
        <div className="next-day-item">
          <img src="http://openweathermap.org/img/wn/10d@2x.png"/>
          <hr/>
          {currentData.wind ? <span style={{color: "silver"}}>wind deg {currentData.wind.deg} &#176;</span> : null}
          <div className="number-temp">
            {currentData.weather ? <h3 style={{color: "aqua"}}>{currentData.weather?.[0].description}</h3> : null}
          </div>
        </div>
        <div className="next-day-item">
          <h1>Sea level</h1>
          <hr/>
          {currentData.main ? <h2 style={{color: "white"}}>{currentData.main.sea_level}m</h2> : null}
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
