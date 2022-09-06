import React, {useEffect, useState} from 'react';
import "./dashboard.scss"
import WidgetsIcon from '@mui/icons-material/Widgets';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import WeatherInfo from "../weatherinfo/WeatherInfo";
import {useDispatch, useSelector} from "react-redux";
import {getLocationRequest} from "../../redux/weather/actions";

const Dashboard = ({setLocation, location}) => {
  const [darkMode, setDarkMode] = useState(false)
  const {locationData } = useSelector(state => state.weather)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocationRequest({locationInfo:location}))
  }, [])

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      dispatch(getLocationRequest({locationInfo: location}))
    }
  }
  return (
    <div className="dashboard-container">
      <div className="dashboard"
           style={darkMode ? {backgroundColor: "#97c6e6"} : {backgroundColor: "rgb(66 65 65)"}}>
        <div className="dashboard-header">
          <div className="menu-icon"><WidgetsIcon/></div>
          <div className="menu-icon"><NotificationsIcon/></div>
          <div className="location-icon"><LocationOnIcon/> <span>Yerevan, Armenia</span></div>
          <div className="searchbar-item"><SearchIcon style={{fontSize: "40px"}}/>
            <input
              value={location}
              onChange={event => setLocation(event.target.value)}
              type="text"
              onKeyPress={searchLocation}
              placeholder="Search city..."
            />
          </div>
          <div className="dark-mode" onClick={() => setDarkMode(!darkMode)}><SettingsBrightnessIcon/></div>
          <div className="user-img-icon">
            <img
              style={{width: "50px", height: "50px", borderRadius: "50%"}}
              src="https://i.gifer.com/origin/c4/c479ac376f71439d7b984a758fd48b2d_w200.webp"
            />
          </div>
        </div>
        <WeatherInfo locationData={locationData}/>
      </div>
    </div>
  );
};

export default Dashboard;