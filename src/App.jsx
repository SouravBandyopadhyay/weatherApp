import "./App.css";
import { useState } from "react";
import { FORECAST_API_URL, WEATHER_API_KEY } from "./api";
import { WEATHER_API_URL } from "./api";
import Search from "./Components/Search";
import Weather from "./Components/Weather";
import { Box, Heading } from "@chakra-ui/react";
import ForeCast from "./Components/ForeCast";
function App() {
  const [data, setData] = useState({
    city_name: "Delhi",
    temp: 25,
    humidity: 50,
    wind: 2.5,
    weather_status: "Haze",
  }); //object
  const [forecast, setForecast] = useState([]); //array
  const [city, setCity] = useState(""); // string

  const handleClick = () => {
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}${city}&units=metric&appid=${WEATHER_API_KEY}`
    );
    const forecastFetch = fetch(
      `${FORECAST_API_URL}${city}&units=metric&cnt=5&appid=${WEATHER_API_KEY}`
    );
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        setData({
          city_name: weatherResponse.name,
          temp: weatherResponse.main.temp,
          humidity: weatherResponse.main.humidity,
          wind: weatherResponse.wind.speed,
          weather_status: weatherResponse.weather[0].main,
        });
        setForecast(forcastResponse.list);
        console.log(forcastResponse.list);
      })
      .catch(console.log);
  };
  return (
    <div className="App">
      <Heading as="h1" fontWeight="400" marginTop="1">
        Simple Weather App
      </Heading>
      <Box margin="auto" p={3}>
        <Search
          onChange={(e) => setCity(e.target.value)}
          onClick={handleClick}
        />
        <Weather data={data} />
        <ForeCast data={forecast} />
      </Box>
    </div>
  );
}

export default App;
