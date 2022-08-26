import React from 'react';
import "./dashboard.scss"
import WidgetsIcon from '@mui/icons-material/Widgets';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import WeatherInfo from "../weatherinfo/WeatherInfo";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="dashboard-header">
          <div className="menu-icon"><WidgetsIcon/></div>
          <div className="menu-icon"><NotificationsIcon/></div>
          <div className="location-icon"><LocationOnIcon/> <span>Yerevan, Armenia</span></div>
          <div className="searchbar-item"><SearchIcon style={{fontSize: "40px"}}/>
            <input
              type="text"
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
        <WeatherInfo/>
      </div>
    </div>
  );
};

export default Dashboard;