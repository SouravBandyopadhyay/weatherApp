import {
  Text,
  Container,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { WeatherIcon } from "./WeatherCondition";
const Weather = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container>
      <Heading as="h1">Welcome to {props.data.city_name} </Heading>
      <Card marginTop={4} borderRadius={"md"}>
        <CardHeader bgColor="gray.200" borderRadius={"md"}>
          <Heading as="h2" fontSize="3xl" fontWeight="400">
            Weather Details
          </Heading>
        </CardHeader>
        <CardBody>
          <VStack>
            <HStack>
              <WeatherIcon
                condition={props.data.weather_status.toLowerCase()}
              />
              <Text fontSize="2xl" fontWeight="400">
                {" "}
                <strong>{props.data.temp} </strong>°C
              </Text>
            </HStack>

            <Text fontSize="lg" fontWeight="400">
              Temperature Maximum: <strong>{props.data.temp_max} </strong>°C
            </Text>
            <Text fontSize="lg" fontWeight="400">
              Temperature Minimum: <strong>{props.data.temp_min} </strong>°C
            </Text>
          </VStack>
        </CardBody>
        <CardFooter>
          <Button onClick={onOpen}>More Details</Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Other Details</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <VStack>
                  <Text fontSize="lg" fontWeight="400">
                    Humidity : <strong>{props.data.humidity}</strong>%
                  </Text>
                  <Text fontSize="lg" fontWeight="400">
                    Pressure : <strong>{props.data.pressure}</strong> hPa
                  </Text>
                  <Text fontSize="lg" fontWeight="400">
                    Weather Status :{" "}
                    <strong>{props.data.weather_status}</strong>
                  </Text>
                  <Text fontSize="lg" fontWeight="400">
                    Sunrise Time : <strong>{props.data.sunrise}</strong>
                  </Text>
                  <Text fontSize="lg" fontWeight="400">
                    Sunrise Time : <strong>{props.data.sunset}</strong>
                  </Text>
                  <Text fontSize="lg" fontWeight="400">
                    Wind Speed : <strong>{props.data.wind}</strong> meter/sec
                  </Text>
                </VStack>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Weather;
