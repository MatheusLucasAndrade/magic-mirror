import { useEffect } from "react";
import useFetch from "../Hooks/useFetch";
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

const Weather = () => {
  const { data, loading } = useFetch<IDataWeather>(url);

  return <div className="box">Montar o componente da API</div>;
};

export default Weather;
