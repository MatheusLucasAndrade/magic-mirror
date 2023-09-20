import { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import { icons } from "../assets/icons/Icons";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import snakeToCamelCase from "../Common/Snake2Camel";

const apiUrl = import.meta.env.VITE_REACT_APP_WEATHER_API_URL_CURRENT;

interface IDataWeather {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  current: {
    condition: {
      code: number;
      text: string;
    };
    lastUpdated: string;
    tempC: number;
    isDay: number;
    windKph: number;
    windDegree: number;
    windDir: string;
    pressureMb: number;
    pressureIn: number;
    precipMm: number;
    precipIn: number;
    humidity: number;
    cloud: number;
    feelslikeC: number;
    visKm: number;
    uv: number;
    gustKph: number;
  };
}

const url = apiUrl;

const wind = <FontAwesomeIcon icon={icons.wind} beat />;
const temp = <FontAwesomeIcon icon={icons.temperatureThreeQuarters} beat />;
const prec = <FontAwesomeIcon icon={icons.cloudShowersHeavy} beat />;
const radi = <FontAwesomeIcon icon={icons.radiation} beat />;
const drop = <FontAwesomeIcon icon={icons.droplet} beat />;

const Weather = () => {
  const [values, setValues] = useState<IDataWeather>();
  const { data, loading } = useFetch<IDataWeather>(url);

  useEffect(() => {
    if (data) {
      setValues(snakeToCamelCase(data));
    }
  }, [data]);

  console.log(data);

  if (loading) {
    return <Loading />;
  }

  const { current, location } = values ?? {};

  return (
    <div className="box">
      <div className="text-center font-size-4 mb">{location?.name}</div>
      <ul className="font-size-2">
        <li>
          <span>{wind}</span>
          {current?.windDir} - {current?.windKph} Km/h
        </li>
        <li>
          <span>{temp}</span>
          {current?.tempC}Cº - {current?.feelslikeC}Cº
        </li>
        <li>
          <span>{drop}</span>
          {current?.humidity}%
        </li>
        <li>
          <span>{prec}</span>
          {current?.precipIn}%
        </li>
        <li>
          <span>{radi}</span>
          {current?.uv}
        </li>
      </ul>
    </div>
  );
};

export default Weather;
