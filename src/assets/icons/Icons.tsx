import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faSun,
  faMoon,
  faCloudSun,
  faCloudSunRain,
  faCloudMoon,
  faCloudMoonRain,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";

export const icons: { [key: string]: IconDefinition } = {
  sun: faSun,
  moon: faMoon,
  cloudSun: faCloudSun,
  cloudSunRain: faCloudSunRain,
  cloudMoon: faCloudMoon,
  cloudMoonRain: faCloudMoonRain,
  default: faArrowRotateRight,
};
