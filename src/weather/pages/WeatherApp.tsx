import { FormEvent, useEffect, useState } from "react";
import weatherApi from "../../api/weatherApi";

import { Box } from "@mui/material";
import { Wrapper } from "../../customStyle/customStyled";

import { useForm } from "../../hooks/useForm";

import { WeatherInfo } from "./WeatherInfo";
import {
  Navbar,
  WeatherImage,
  WeatherLocations,
  WeatherTemp,
} from "../components";

export const WeatherApp = () => {
  const { formState, onChangeInput } = useForm({});
  const { cityInput } = formState;

  const [color, setColor] = useState(false);
  const [country, setCountry] = useState("");
  const [mainState, setMainState] = useState({});
  const [weatherState, setWeatherState] = useState({});
  const [windState, setWindState] = useState({ speed: 0 });
  const [nameState, setNameState] = useState("");

  const colorSky = (color: string) =>
    /[nN]/.test(color) ? setColor(true) : setColor(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const resp = await weatherApi.get("/weather", {
        params: {
          q: cityInput,
        },
      });
      const { data } = resp;
      const { main, name, weather, wind, sys } = await data;

      colorSky(weather[0].icon);

      setCountry(sys.country);
      setMainState(main);
      setWeatherState(weather[0]);
      setWindState(wind);
      setNameState(name);
      console.log("ok");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    weatherApi.get("/weather", { params: { q: "Lima" } }).then((resp) => {
      const { data } = resp;
      const { main, name, weather, wind, sys } = data;

      setMainState(main);
      setWeatherState(weather[0]);
      setWindState(wind);
      setNameState(name);
      colorSky(weather[0].icon);
      setCountry(sys.country);
    });
  }, []);

  return (
    <Box padding={1}>
      <Wrapper $color={color}>
        <Navbar handleSubmit={handleSubmit} onChangeInput={onChangeInput} />
        <WeatherImage weather={weatherState} />
        <WeatherLocations name={nameState} country={country} />
        <WeatherTemp main={mainState} />
        <WeatherInfo wind={windState} main={mainState} />
      </Wrapper>
    </Box>
  );
};
