import React, {useEffect, useState} from 'react';
import "./displayedday.scss"
import Dayinfo from "../dayinfo/Dayinfo";
import {useDispatch, useSelector} from "react-redux";
import {getDataRequest} from "../../redux/weather/actions";
import Intro from "../intro/Intro";

const DisplayDay = ({location}) => {
  const [target, setTarget] = useState({});
  const {isGettingData, data} = useSelector(state => state.weather)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataRequest({name: location}))
  }, [])

  return (
    <div className="displayedDays-container">

      <div className="location"><h1 style={{width: "400px"}}>Have a good Day!</h1><Intro location={location}/></div>
      <div className="includes-days">
        {isGettingData ? <h1 style={{color: "white", fontWeight: "400"}}>Loading...</h1> :
          <>
            <div className="day1">
              {data.map((item) => {
                return <>
                  <div className="item" key={item.id} onClick={(event) => {

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

              })}
            </div>
          </>
        }
      </div>
      {target.weather && <Dayinfo target={target}/>}
    </div>
  );
};

export default DisplayDay;
