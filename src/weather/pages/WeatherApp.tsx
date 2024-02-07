import { FormEvent, useEffect, useState } from "react";
import weatherApi from "../../api/weatherApi";

import { Box } from "@mui/material";
import { Wrapper } from "../../customStyle/customStyled";

import { useForm } from "../../hooks/useForm";

import { WeatherInfo } from "./WeatherInfo";
import {
  Navbar,
  WeatherImages,
  WeatherLocations,
  WeatherTemperatura,
} from "../components";

export const WeatherApp = () => {
  const { formState, onChangeInput } = useForm({});
  const { cityInput } = formState;

  const [weatherMain, setWeatherMain] = useState("");
  const [temp, setTemp] = useState<number>(0);
  const [location, setLocation] = useState<string>("");
  const [wind, setWind] = useState({ speed: 0 });
  const [humidity, setHumidity] = useState(0);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const resp = await weatherApi.get("/weather", {
        params: {
          q: cityInput,
        },
      });
      const { data } = resp;
      setWeatherMain(data.weather[0].main);
      setTemp(data.main.temp);
      setLocation(data.name);
      setWind(data.wind);
      setHumidity(data.main.humidity);
      console.log("ok");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    weatherApi.get("/weather", { params: { q: "Lima" } }).then((resp) => {
      const { data } = resp;
      setWeatherMain(data.weather[0].main);
      setTemp(data.main.temp);
      setLocation(data.name);
      setWind(data.wind);
      setHumidity(data.main.humidity);
    });
  }, []);

  return (
    <Box padding={1}>
      <Wrapper>
        <Navbar handleSubmit={handleSubmit} onChangeInput={onChangeInput} />
        <WeatherImages main={weatherMain} />
        <WeatherTemperatura temp={temp} />
        <WeatherLocations name={location} />
        <WeatherInfo wind={wind} humidity={humidity} />
      </Wrapper>
    </Box>
  );
};
