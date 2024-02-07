import { WeatherTemp } from "../../customStyle/customStyled";
type propType = {
  temp: number;
};
export const WeatherTemperatura = (props: propType) => {
  const { temp } = props;
  return <WeatherTemp>{Math.round(temp)}°c</WeatherTemp>;
};
