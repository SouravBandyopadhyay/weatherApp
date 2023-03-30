import {
  Box,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { FORECAST_API_URL, WEATHER_API_KEY } from "./api";
import { WEATHER_API_URL } from "./api";
import Footer from "./Footer";
import Othercities from "./ForeCast";
import ForeCast from "./ForeCast";
import { ForeCastChart } from "./ForeCastChart";
import Search from "./Search";
import Weather from "./Weather";

// Function to format Time for sunrise and sunset
export function changeTime(time) {
  const timestamp = time;
  const date = new Date(timestamp * 1000);
  const formattedTime = date.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  return formattedTime;
}

const HomePage = () => {
  const [data, setData] = useState({
    city_name: "Delhi",
    temp: 25,
    temp_max: 26,
    temp_min: 22,
    humidity: 50,
    wind: 1.03,
    weather_status: "Haze",
    pressure: 1011,
    sunrise: "6:23:39 am",
    sunset: "6:49:15 pm",
  }); //object
  const [forecast, setForecast] = useState([]); //array
  const [city, setCity] = useState(""); // string

  const handleClick = () => {
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}${city}&units=metric&appid=${WEATHER_API_KEY}`
    );
    const forecastFetch = fetch(
      `${FORECAST_API_URL}${city}&units=metric&cnt=7&appid=${WEATHER_API_KEY}`
    );
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        setData({
          city_name: weatherResponse.name,
          temp: weatherResponse.main.temp,
          temp_max: weatherResponse.main.temp_max + 1,
          temp_min: weatherResponse.main.temp_min,
          pressure: weatherResponse.main.pressure,
          humidity: weatherResponse.main.humidity,
          wind: weatherResponse.wind.speed,
          weather_status: weatherResponse.weather[0].main,
          sunrise: changeTime(weatherResponse.sys.sunrise),
          sunset: changeTime(weatherResponse.sys.sunset),
        });
        setForecast(forcastResponse.list);
        console.log(weatherResponse, forcastResponse.list);
      })
      .catch(console.log);
  };
  return (
    <Box>
      <SimpleGrid
        gridTemplateColumns={["1fr", "1.4fr 0.6fr"]}
        justifyContent="space-between"
        bgColor="gray.200"
      >
        <HStack gap={2} marginLeft={5}>
          <Text
            fontFamily={"cursive"}
            fontSize="2xl"
            color="teal.600"
            fontWeight={600}
          >
            Weather App
          </Text>
        </HStack>
        <Box>
          <Search
            onChange={(e) => setCity(e.target.value)}
            onClick={handleClick}
          />
        </Box>
      </SimpleGrid>
      <Box>
        <Weather data={data} />
      </Box>
      <Box width="60%" margin="auto">
        {forecast.length > 0 ? <ForeCastChart data={forecast} /> : null}
      </Box>
      <Othercities />
      <Footer marginTop="auto" />
    </Box>
  );
};

export default HomePage;
