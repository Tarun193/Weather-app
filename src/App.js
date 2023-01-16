import Search from "./Search";
import { useState } from "react";
import WeatherReport from "./WeatherReport";
import ForcastReport from "./ForcastReport";
const API_KEY = "92823a400efac367557368ee1baaafa8";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [place, setPlace] = useState("");
  const [forcastData, setForcastData] = useState({});

  const onSearchChange = async (searchData) => {
    const [lat, long] = searchData.value.split(" ");
    setPlace(searchData.label);
    console.log(searchData);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
        );
        const forcastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        const forcastData = await forcastResponse.json();
        setWeatherData(data);
        setForcastData(forcastData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  };
  return (
    <div className="App">
      <Search onSearchChange={onSearchChange} />
      <WeatherReport weatherData={weatherData} place={place} />
      <ForcastReport forcastData={forcastData} />
    </div>
  );
}

export default App;
