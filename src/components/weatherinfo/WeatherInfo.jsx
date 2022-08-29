import React, {useEffect, useState} from 'react';
import "./weatherinfo.scss"

const WeatherInfo = () => {
  const [currentdata, setCurrentData] = useState({});
  useEffect(() => {
    fetch(` https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&q=hrazdan&appid=f8e49ca944d77bb0460d19944e58e0ee`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setCurrentData(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  console.log("data", currentdata)
  console.log("city", currentdata?.city?.name)
  console.log("list", currentdata?.list?.[0].main?.humidity)

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
            <h2>Monday</h2> <h3>15:44 PM</h3>
          </div>
          <div className="temperature-description">
            <div className="temp-degree">
              <div className="number-temp">
                <h1>16</h1>
                <div className="degree-symbol">1</div>
              </div>
              <span><small>Real Feel</small>18</span>
              <span><small>Wind: N-E,</small>5-8 km/h</span>
              <span><small>Pressure:</small>{currentdata?.list?.[0].main.pressure}MB</span>
              <span><small>Humidity:</small>{currentdata?.list?.[0].main.humidity}%</span>
            </div>
            <img src="http://openweathermap.org/img/wn/10d@2x.png"/>
          </div>
          </div>
            <div className="next-day-item">
          <h1>Tue</h1>
          <hr/>
          <img src="http://openweathermap.org/img/wn/10d@2x.png"/>
          <div className="number-temp">
            <h2>10&#176;</h2>
          </div>
        </div>
        <div className="next-day-item">
          <h1>Wed</h1>
          <hr/>
          <img
            src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png"/>
          <div className="number-temp">
            <h2>15&#176;</h2>
          </div>
        </div>
        <div className="next-day-item">
          <h1>Thu</h1>
          <hr/>
          <img
            src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png"/>
          <div className="number-temp">
            <h2>11&#176;</h2>
          </div>
        </div>
        <div className="next-day-item">
          <h1>Fri</h1>
          <hr/>
          <img
            src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png"/>
          <div className="number-temp">
            <h2>12&#176;</h2>
          </div>
        </div>
        <div className="next-day-item">
          <h1>Sat</h1>
          <hr/>
          <img
            src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png"/>
          <div className="number-temp">
            <h2>18&#176;</h2>
          </div>
        </div>
        <div className="next-day-item">
          <h1>Sun</h1>
          <hr/>
          <img
            src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png"/>
          <div className="number-temp">
            <h2>37&#176;</h2>
          </div>
        </div>
      </div>
      <div style={{width: "100%"}}>
        <img style={{width: "100%", height: "400px"}}
             src="https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/styles/featured_media_detail/public/news/featured_media/20150428_03e.png?V1RJ2xZ9EZJ5PeeMM.9k1.BJr0POAqZb&itok=xwUKYU4_"/>
      </div>
    </div>
  );
};

export default WeatherInfo;
