import { Text, Icon, Container, SimpleGrid, chakra } from "@chakra-ui/react";
import { FaTemperatureHigh, FaWind } from "react-icons/fa";
import { BiDroplet } from "react-icons/bi";
import { MdDescription } from "react-icons/md";

export default function ForeCast({ data }) {
  return (
    <SimpleGrid
      gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr 1fr"]}
      marginTop="5"
    >
      {data?.map((el) => (
        <Container p={1} boxShadow="md" borderRadius="md">
          <SimpleGrid
            // border="2px solid teal"
            gridTemplateColumns={["1fr"]}
            gap={2}
            p={4}
            fontSize="md"
            justifyContent="space-evenly"
          >
            <Text>
              Temparture{"  "}
              <chakra.span>
                <Icon as={FaTemperatureHigh} />
              </chakra.span>{" "}
              : {el.main.temp}°
            </Text>
            <Text>
              Humidity{" "}
              <chakra.span>
                <Icon as={BiDroplet} />
              </chakra.span>{" "}
              : {el.main.humidity}%
            </Text>
            <Text>
              Wind Speed{" "}
              <chakra.span>
                <Icon as={FaWind} />
              </chakra.span>{" "}
              : {el.wind.speed}km/s
            </Text>
            <Text>
              Description{" "}
              <chakra.span>
                <Icon as={MdDescription} />
              </chakra.span>{" "}
              : {el.weather[0].main}
            </Text>
          </SimpleGrid>
        </Container>
      ))}
    </SimpleGrid>
  );
}
