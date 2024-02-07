import { WeatherImage } from "../../customStyle/customStyled";
//* Images----
import cloud_icon from "/assets/cloud.png";
import clear_icon from "/assets/clear.png";
import drizzle_icon from "/assets/drizzle.png";
import rain_icon from "/assets/rain.png";
import snow_icon from "/assets/snow.png";
//* Images----
type propTypes = {
  main: string;
};

export const WeatherImages = (props: propTypes) => {
  const { main } = props;

  const imagesWeather = (main: string) => {
    if (main.toLowerCase() === "clouds") return cloud_icon;
    if (main.toLowerCase() === "rain") return rain_icon;
    if (main.toLowerCase() === "snow") return snow_icon;
    if (main.toLowerCase() === "drizzle") return drizzle_icon;
    if (main.toLowerCase() === "clear") return clear_icon;
    return cloud_icon;
  };
  return (
    <WeatherImage>
      <img src={imagesWeather(main)} alt="icon-weather" />
    </WeatherImage>
  );
};
