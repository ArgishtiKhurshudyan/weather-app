import React, {useEffect, useState} from 'react';
import "./dashboard.scss"
import WidgetsIcon from '@mui/icons-material/Widgets';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import WeatherInfo from "../weatherinfo/WeatherInfo";

const Dashboard = () => {
  const [location, setLocation] = useState();
  const [currentData, setCurrentData] = useState({});
  // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=135&q=armenia&appid=f8e49ca944d77bb0460d19944e58e0ee`)
  //   .then((res) => {
  //     return res.json()
  //   })
  //   .then((data) => {
  //     setCurrentData(data)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  const searchLocation = (event) => {
  if(event.key === "Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=135&q=${location}&appid=f8e49ca944d77bb0460d19944e58e0ee`)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setCurrentData(data)
        })
        .catch((error) => {
          console.log(error)
        })
  }
  }
  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="dashboard-header">
          <div className="menu-icon"><WidgetsIcon /></div>
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
          <div className="dark-mode"><SettingsBrightnessIcon/></div>
          <div className="user-img-icon">
            <img
              style={{width: "50px", height: "50px", borderRadius: "50%"}}
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            />
          </div>
        </div>
        <WeatherInfo location={location} setLocation={setLocation} currentData={currentData}/>
      </div>
    </div>
  );
};

export default Dashboard;