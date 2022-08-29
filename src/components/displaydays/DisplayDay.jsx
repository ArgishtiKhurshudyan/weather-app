import React, {useEffect, useState} from 'react';
import "./displayedday.scss"
const DisplayDay = () => {
  const [data1, setData1] = useState({});
  let lat = 5;
  let lon = 5;
  useEffect(() => {
    fetch(` https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&q=hrazdan&appid=f8e49ca944d77bb0460d19944e58e0ee`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setData1(data)
        console.log('data', data.id)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  return (
    <div className="displayedDays-container">
      {
        data1?.list?.map((item) => (

          <div>
            <h1 style={{color:"white"}}>{item.dt_txt}</h1>
          </div>

        ))
      }
    </div>
  );
};

export default DisplayDay;