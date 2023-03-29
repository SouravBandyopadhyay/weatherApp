import { Icon } from "@chakra-ui/react";
import {
  WiDaySunny,
  WiDayLightning,
  WiSmog,
  WiDayCloudyGusts,
  WiDayHaze,
  WiNightRainWind,
} from "react-icons/wi";
export function WeatherIcon({ condition }) {
  let icon;
  switch (condition) {
    case "mist":
      icon = WiSmog;
      break;
    case "sunny":
      icon = WiDaySunny;
      break;
    case "clouds":
      icon = WiDayCloudyGusts;
      break;
    case "thunderstorm":
      icon = WiDayLightning;
      break;
    case "haze":
      icon = WiDayHaze;
      break;
    case "rain":
      icon = WiNightRainWind;
      break;
    default:
      icon = WiDaySunny;
  }
  return <Icon as={icon} w={10} h={10} />;
}
