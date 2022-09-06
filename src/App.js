import Dashboard from "./components/weatherdashbord/Dashboard";
import DisplayDay from "./components/displaydays/DisplayDay";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FavoriteCity from "./components/favoritcity/FavoriteCity";
import {useState} from "react";


function App() {
  const [location, setLocation] = useState("Yerevan");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard location={location} setLocation={setLocation}/>}/>
          <Route path="/fivedaysinfo" element={<DisplayDay location={location}/>}/>
          <Route path="/favoriteCities" element={<FavoriteCity location={location}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
