import React, {useEffect, useState} from 'react';
import "./weatherinfo.scss"

const WeatherInfo = () => {
  const [map, setMap] = useState([]);
let api_key =" f8e49ca944d77bb0460d19944e58e0ee"
  useEffect(() => {

    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${api_key}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setMap(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  console.log(map)
  return (
    <div className="weather-info-container">
      <div className="info-header">
        <div className="titles">
          <button>Today</button>
          <button>Tomorrow</button>
          <button className="next-days">Next 7 days</button>
        </div>
      </div>
      <div className="info-days">
        <div className="current-day">
          <div className="title-day">
            <h2>Monday</h2> <h3>11:42 PM</h3>
          </div>
          <div className="temperature-description">
            <div className="temp-degree">
              <div className="number-temp">
                <h1>16</h1>
                <div className="degree-symbol">1</div>
              </div>
              <span><small>Real Feel</small>18</span>
              <span><small>Wind: N-E,</small>5-8 km/h</span>
              <span><small>Pressure:</small>1000MB</span>
              <span><small>Humidity:</small>51%</span>
            </div>
            <img src="https://icon-library.com/images/weather-sun-icon/weather-sun-icon-21.jpg"/>
          </div>
        </div>
        <div className="next-day-item">
          <h1>Tue</h1>
          <hr/>
          <img
            src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png"/>
          <div className="number-temp">
            <h2>10</h2>
            <div className="degree-symbol">2</div>
          </div>
        </div>
        <div className="next-day-item">
          <h1>Wed</h1>
          <hr/>
          <img
            src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png"/>
          <div className="number-temp">
            <h2>15</h2>
            <div className="degree-symbol">3</div>
          </div>
        </div>
        <div className="next-day-item">
          <h1>Thu</h1>
          <hr/>
          <img
            src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png"/>
          <div className="number-temp">
            <h2>11</h2>
            <div className="degree-symbol">4</div>
          </div>
        </div>
        <div className="next-day-item">
          <h1>Fri</h1>
          <hr/>
          <img
            src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png"/>
          <div className="number-temp">
            <h2>12</h2>
            <div className="degree-symbol">5</div>
          </div>
        </div>
        <div className="next-day-item">
          <h1>Sat</h1>
          <hr/>
          <img
            src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png"/>
          <div className="number-temp">
            <h2>18</h2>
            <div className="degree-symbol">6</div>
          </div>
        </div>
        <div className="next-day-item">
          <h1>Sun</h1>
          <hr/>
          <img
            src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png"/>
          <div className="number-temp">
            <h2>37</h2>
            <div className="degree-symbol">6</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WeatherInfo;