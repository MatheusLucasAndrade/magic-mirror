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

const city = <FontAwesomeIcon icon={icons.city} />;
const wind = <FontAwesomeIcon icon={icons.wind} />;
const temp = <FontAwesomeIcon icon={icons.temperatureThreeQuarters} />;
const prec = <FontAwesomeIcon icon={icons.cloudShowersHeavy} />;
const radi = <FontAwesomeIcon icon={icons.radiation} />;

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
      <div className="location">
        {city} {location?.name} - {location?.region}
      </div>
      <div className="weather-wind">
        {wind}Ventos para {current?.windDir} em velocidade de {current?.windKph}
        Km/h
      </div>
      <div className="weather-temperature">
        {temp}Temperatura {current?.tempC}Cº Sensação térmica{" "}
        {current?.feelslikeC}cº
        <br />
        Umidade {current?.humidity}%
      </div>
      <div className="weather-status">
        {prec}probabilidade de chuva
        {current?.precipIn}%{radi}
        Índice UV {current?.uv}
      </div>
    </div>
  );
};

export default Weather;
