import React, { useState, useEffect } from "react";
import { WEATHER_API_KEY } from "./api";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";
export default function Othercities() {
  const [cities, setCities] = useState([
    { name: "London", id: 2643743 },
    { name: "New York", id: 5128638 },
    { name: "Tokyo", id: 1850147 },
    { name: "Paris", id: 2968815 },
    { name: "Moscow", id: 524901 },
  ]);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const apiKey = `${WEATHER_API_KEY}`; // replace with your OpenWeather API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/group?id=${cities
      .map((city) => city.id)
      .join()}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setWeatherData(data.list));
  }, [cities]);
  return (
    <Box width="70%" margin="auto" marginTop={5}>
      <TableContainer fontFamily={"cursive"}>
        <Table variant="striped" colorScheme="teal">
          <TableCaption fontSize={"xl"}>
            Weather Update Around The World
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Cities</Th>
              <Th isNumeric>Temperature</Th>
            </Tr>
          </Thead>
          <Tbody>
            {weatherData.map((weather, index) => (
              <Tr key={index}>
                <Td fontWeight={600} textColor="facebook.600">
                  {cities[index].name}
                </Td>
                <Td isNumeric fontWeight="bold">{weather.main.temp}°C</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
