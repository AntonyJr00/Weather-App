import {
  Data,
  DataText,
  ElementData,
  IconData,
  WeatherData,
} from "../../customStyle/customStyled";

import humidity_icon from "/assets/humidity.png";
import wind_icon from "/assets/wind.png";

type propType = {
  wind: {
    speed: number;
  };
  main: {
    humidity?: number;
  };
};

export const WeatherInfo = (props: propType) => {
  const { wind, main } = props;
  return (
    <WeatherData>
      <ElementData>
        <IconData src={humidity_icon} alt="humidity-icon" />
        <Data>
          <div>{main.humidity}%</div>
          <DataText>Humidity</DataText>
        </Data>
      </ElementData>

      <ElementData>
        <IconData src={wind_icon} alt="wind-icon" />
        <Data>
          <div>{Math.trunc(wind.speed || 1)} km/h</div>
          <DataText>Wind Speed</DataText>
        </Data>
      </ElementData>
    </WeatherData>
  );
};
