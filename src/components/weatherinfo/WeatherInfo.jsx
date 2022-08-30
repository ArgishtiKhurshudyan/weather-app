import React, { useState} from 'react';
import "./weatherinfo.scss"
import {Link} from "react-router-dom";
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&q=hrazdan&appid=f8e49ca944d77bb0460d19944e58e0ee;
// "http://openweathermap.org/img/wn/10d@2x.png"
const WeatherInfo = ({currentData}) => {
  return (
    <div className="weather-info-container">
      <div className="info-header">
        <div className="titles">
          <Link to="favoriteCities"><p>Favorite cities</p></Link>
          {/*<button>Tomorrow</button>*/}
         <Link to="fivedaysinfo"> <p className="next-days">Next 5 days</p></Link>
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
                {currentData.main ? <h1>{currentData.main.temp.toFixed()}F&#176;</h1> : null}
              </div>
              {currentData.main ? <span><small>Real Feel </small>{currentData.main.feels_like.toFixed()}&#176;</span> : null}
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
          {currentData.main ? <h2 style={{color:"white"}}>{currentData.main.sea_level}m</h2>: null}
        </div>
      </div>
      <div style={{width: "100%"}}>
        <img style={{width: "100%", height: "350px"}}
             src="https://miro.medium.com/max/1400/1*GsImz-edoeuqCMfKxDus0w.jpeg"/>
      </div>
    </div>
  );
};

export default WeatherInfo;
