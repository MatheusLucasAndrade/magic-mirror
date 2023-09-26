import { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import { icons } from "../assets/icons/Icons";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import snakeToCamelCase from "../Common/Snake2Camel";
import React from "react";

const apiUrl = import.meta.env.VITE_REACT_APP_WEATHER_API_URL_CURRENT;

interface IDataWeather {
  current: {
    condition: {
      code: number;
      text: string;
    };
    lastUpdated: string;
    tempC: number;
  };
  forecast: {
    forecastday: {
      0: {
        day: {
          dailyChanceOfRain: number;
          maxtempC: number;
          mintempC: number;
        };
      };
    };
  };
}

interface IDayNight {
  sunriseHour: number;
  sunsetHour: number;
}

const url = apiUrl;

const day = <FontAwesomeIcon className="color-sun" icon={icons.sun} />;
const night = <FontAwesomeIcon className="color-light-sun" icon={icons.moon} />;
const cloudDay = (
  <FontAwesomeIcon className="color-light-sun" icon={icons.cloudSun} />
);
const cloudNight = (
  <FontAwesomeIcon className="color-light-night" icon={icons.cloudMoon} />
);
const dayRain = (
  <FontAwesomeIcon className="color-light-night" icon={icons.cloudSunRain} />
);
const nightRain = (
  <FontAwesomeIcon className="color-light-night" icon={icons.cloudMoonRain} />
);

const Weather = () => {
  const [values, setValues] = useState<IDataWeather>();
  const [iconWeather, setIconWeather] = useState<React.JSX.Element>(
    <FontAwesomeIcon icon={icons.default} spin />
  );
  const { data, loading } = useFetch<IDataWeather>(url);

  const isDay = ({ sunriseHour, sunsetHour }: IDayNight): boolean => {
    const now = new Date();
    const currentHour = now.getHours();
    return currentHour >= sunriseHour && currentHour < sunsetHour;
  };

  useEffect(() => {
    if (data) {
      setValues(snakeToCamelCase(data));
    }
  }, [data]);

  useEffect(() => {
    const changeIcon = (code: number) => {
      const current = isDay({ sunriseHour: 6, sunsetHour: 18 });
      let icon: React.JSX.Element | undefined;

      if (code === 1000 && current) {
        icon = day;
      } else if (code === 1000 && !current) {
        icon = night;
        console.log("chamou aquiii");
      } else if (code > 1000 && code <= 1030 && current) {
        icon = cloudDay;
      } else if (code > 1000 && code <= 1030 && !current) {
        icon = cloudNight;
      } else if (code > 1030 && current) {
        icon = dayRain;
      } else if (code > 1030 && !current) {
        icon = nightRain;
      }

      return icon;
    };

    if (values) {
      const icon = changeIcon(values.current.condition.code);
      setIconWeather(icon ?? <FontAwesomeIcon icon={icons.default} spin />);
    }
  }, [values]);

  if (loading) {
    return <Loading />;
  }

  const { current, forecast } = values ?? {};

  return (
    <div>
      <div className="flex">
        <span className="font-size-8">{iconWeather}</span>
        <div className="font-size-2 temperature">
          <span>MIN: {forecast?.forecastday[0].day.mintempC}Cº</span>
          <span>MAX: {forecast?.forecastday[0].day.maxtempC}Cº</span>
          <span className="color-sun font-size-3 bold">{current?.tempC}Cº</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
