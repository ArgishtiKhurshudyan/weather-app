import React, {useEffect, useState} from 'react';
import "./displayedday.scss"
import Dayinfo from "../dayinfo/Dayinfo";

const DisplayDay = ({location}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [target, setTarget] = useState({});

  let lat = 5;
  let lon = 5;
  useEffect(() => {
    const fetchingData = async () => {
      setLoading(true)
      try {
        await fetch(` https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&q=${location}&appid=f8e49ca944d77bb0460d19944e58e0ee`)
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            setData(data.list)
          })
        setLoading(false)
      } catch (err) {
        throw new Error()
      }
    }
    fetchingData()
  }, [])
  return (
    <div className="displayedDays-container">
      <div className="location"><h1>Five days info</h1> <span>{location}</span></div>
      <div className="includes-days">
        {loading ? <h1 style={{color:"white", fontWeight:"400"}}>Loading...</h1> :
          <>
            <div className="day1">
              {data.map((item, index) => {
                if (index < 5) {
                  return <>
                    <div className="item" onClick={(event) => {
                      if (event.target) {
                        setTarget({
                          month: item.dt_txt,
                          weather: item.weather?.[0].main,
                          temp: item.main.temp,
                          humidity: item.main.humidity
                        })
                      }
                    }}>
                      <div className={item.weather?.[0].main === "Clouds" && "clouds"}>
                        <h2>{item.dt_txt}</h2>
                        <h4>Grnd_Level: {item.main.grnd_level}</h4>
                        <h3>{item.weather?.[0].main}</h3>
                      </div>
                    </div>
                  </>
                }
              })}
            </div>
            <div className="day1">
              {data.map((item, index) => {
                if (index > 4 && index < 13) {
                  return <>
                    <div className="item" onClick={(event) => {
                      if (event.target) {
                        setTarget({
                          month: item.dt_txt,
                          weather: item.weather?.[0].main,
                          temp: item.main.temp,
                          humidity: item.main.humidity
                        })
                      }
                    }}
                    >
                      <>
                        <h2>{item.dt_txt}</h2>
                        <h4>Grnd_Level: {item.main.grnd_level}</h4>
                        <h3>{item.weather?.[0].main}</h3>
                      </>
                    </div>
                  </>
                }
              })}

            </div>
            <div className="day1">
              {data.map((item, index) => {
                if (index > 12 && index < 21) {
                  return <>
                    <div className="item" onClick={(event) => {
                      if (event.target) {
                        setTarget({
                          month: item.dt_txt,
                          weather: item.weather?.[0].main,
                          temp: item.main.temp,
                          humidity: item.main.humidity
                        })
                      }
                    }}>
                      <h2>{item.dt_txt}</h2>
                      <h4>Grnd_Level: {item.main.grnd_level}</h4>
                      <h3>{item.weather?.[0].main}</h3>
                    </div>
                  </>
                }
              })}
            </div>
            <div className="day1">
              {data.map((item, index) => {
                if (index > 21 && index < 29) {
                  return <>
                    <div className="item" onClick={(event) => {
                      if (event.target) {
                        setTarget({
                          month: item.dt_txt,
                          weather: item.weather?.[0].main,
                          temp: item.main.temp,
                          humidity: item.main.humidity
                        })
                      }
                    }}>
                      <h2>{item.dt_txt}</h2>
                      <h4>Grnd_Level: {item.main.grnd_level}</h4>
                      <h3>{item.weather?.[0].main}</h3>
                    </div>
                  </>
                }
              })}
            </div>
            <div className="day1">
              {data.map((item, index) => {
                if (index > 29 && index < 37) {
                  return <>
                    <div className="item" onClick={(event) => {
                      if (event.target) {
                        setTarget({
                          month: item.dt_txt,
                          weather: item.weather?.[0].main,
                          temp: item.main.temp,
                          humidity: item.main.humidity
                        })
                      }
                    }}>
                      <h2>{item.dt_txt}</h2>
                      <h4>Grnd_Level: {item.main.grnd_level}</h4>
                      <h3>{item.weather?.[0].main}</h3>
                    </div>
                  </>
                }
              })}
            </div>
          </>}
      </div>
      {target.weather && <Dayinfo target={target}/>}
    </div>
  );
};

export default DisplayDay;
