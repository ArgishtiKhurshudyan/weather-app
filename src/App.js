import Dashboard from "./components/weatherdashbord/Dashboard";
import DisplayDay from "./components/displaydays/DisplayDay";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import FavoriteCity from "./components/favoritcity/FavoriteCity";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/fivedaysinfo" element={<DisplayDay/>}/>
          <Route path="/favoriteCities" element={<FavoriteCity/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
