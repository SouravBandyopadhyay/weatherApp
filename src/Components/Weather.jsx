import {
    Box,
    Grid,
    Text,
    Icon,
    Container,
    Heading,
    SimpleGrid,
    chakra
  } from "@chakra-ui/react";
  import React from "react";
  import { GoLocation } from "react-icons/go";
  import { FaTemperatureHigh, FaWind } from "react-icons/fa";
  import { BiDroplet } from "react-icons/bi";
  import { MdDescription } from "react-icons/md";
  const Weather = (props) => {
    return (
      <Container p={1} boxShadow="md" borderRadius="md" margin="auto">
        <Box color="linkedin.700" display="flex" justifyContent="center">
          <Heading> {props.data.city_name}</Heading>
          <Icon as={GoLocation} w={6} h={6} boxSize={6} margin={("auto", 2)} />
        </Box>
        <SimpleGrid
          gridTemplateColumns={["1fr", "1fr 1fr"]}
          gap={2}
          p={4}
          fontSize="lg"
        >
          <Text>
            Temparture{"  "}
            <chakra.span>
              <Icon as={FaTemperatureHigh} />
            </chakra.span>{" "}
            : {props.data.temp}°
          </Text>
          <Text>
            Humidity{" "}
            <chakra.span>
              <Icon as={BiDroplet} />
            </chakra.span>{" "}
            : {props.data.humidity}%
          </Text>
          <Text>
            Wind Speed{" "}
            <chakra.span>
              <Icon as={FaWind} />
            </chakra.span>{" "}
            : {props.data.wind}km/s
          </Text>
          <Text>
            Description{" "}
            <chakra.span>
              <Icon as={MdDescription} />
            </chakra.span>{" "}
            : {props.data.weather_status}
          </Text>
        </SimpleGrid>
      </Container>
    );
  };
  
  export default Weather;
  