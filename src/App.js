import Dashboard from "./components/weatherdashbord/Dashboard";
import DisplayDay from "./components/displaydays/DisplayDay";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FavoriteCity from "./components/favoritcity/FavoriteCity";
import {useEffect, useState} from "react";

function App() {
  const [location, setLocation] = useState("Yerevan");
  const [currentData, setCurrentData] = useState({});

  const fetchinData = async (location = "Yerevan") => {
    try {
      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=135&q=${location}&appid=f8e49ca944d77bb0460d19944e58e0ee`)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setCurrentData(data)
        })
    } catch {

    }
  }

  useEffect(() => {
    fetchinData()
  }, [location])

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      fetchinData(location)
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard location={location} setLocation={setLocation} currentData={currentData}
                                              searchLocation={searchLocation} setCurrentData={setCurrentData}/>}/>
          <Route path="/fivedaysinfo" element={<DisplayDay location={location}/>}/>
          <Route path="/favoriteCities" element={<FavoriteCity/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
