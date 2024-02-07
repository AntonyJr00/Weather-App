import { WeatherLocation } from "../../customStyle/customStyled";
type propType = {
  name: string;
};
export const WeatherLocations = (props: propType) => {
  const { name } = props;
  return <WeatherLocation>{name || "City"}</WeatherLocation>;
};
