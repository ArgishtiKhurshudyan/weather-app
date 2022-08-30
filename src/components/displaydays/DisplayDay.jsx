import React, {useEffect, useState} from 'react';
import "./displayedday.scss"

const DisplayDay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let lat = 5;
  let lon = 5;
  useEffect(() => {
    const fetchingData = async () => {
      setLoading(true)
      try {
        await fetch(` https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&q=location&appid=f8e49ca944d77bb0460d19944e58e0ee`)
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
      <h1>Five days info</h1>
      <div className="includes-days">
        {loading ? <h1>Loading...</h1> :
          <>
            <div className="day1">
              {data.map((item, index) => {
                if (index < 3) {
                  return <>
                    <div className="item">
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
                if (index > 2 && index < 11) {
                  return <>
                    <div className="item">
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
                if (index > 10 && index < 19) {
                  return <>
                    <div className="item">
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
                if (index > 18 && index < 27) {
                  return <>
                    <div className="item">
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
                if (index > 26 && index < 35) {
                  return <>
                    <div className="item">
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
    </div>
  );
};

export default DisplayDay;
