import { Box, Typography } from "@mui/material";

//* Images_Day----
import cloud_icon from "/assets/cloud.png";
import clear_icon from "/assets/clear.png";
import drizzle_icon from "/assets/drizzle.png";
import rain_icon from "/assets/rain.png";
import snow_icon from "/assets/snow.png";
import thunderstorm from "/assets/thunderstorm.png";
//* Images_Night----
import cloud_night_icon from "/assets/cloud-night.png";
import clear_night_icon from "/assets/clear-night.png";
import drizzle_night_icon from "/assets/drizzle-night.png";
import rain_night_icon from "/assets/rain-night.png";
import snow_night_icon from "/assets/snow-night.png";

type propTypes = {
  weather: {
    main?: string;
    description?: string;
    icon?: string;
  };
};

export const WeatherImage = (props: propTypes) => {
  const { main, description, icon } = props.weather;

  const imagesWeather = () => {
    if (icon && main) {
      if (main.toLowerCase() === "thunderstorm") return thunderstorm;
      if (/[dD]/.test(icon)) {
        if (main.toLowerCase() === "clouds") return cloud_icon;
        if (main.toLowerCase() === "rain") return rain_icon;
        if (main.toLowerCase() === "snow") return snow_icon;
        if (main.toLowerCase() === "drizzle") return drizzle_icon;
        if (main.toLowerCase() === "clear") return clear_icon;
      }
      if (/[nN]/.test(icon)) {
        if (main.toLowerCase() === "clouds") return cloud_night_icon;
        if (main.toLowerCase() === "rain") return rain_night_icon;
        if (main.toLowerCase() === "snow") return snow_night_icon;
        if (main.toLowerCase() === "drizzle") return drizzle_night_icon;
        if (main.toLowerCase() === "clear") return clear_night_icon;
      }
    }
    return cloud_icon;
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={"29px"}
    >
      <Typography
        color={"white"}
        fontSize={16}
        fontWeight={400}
        fontFamily={"Oswald"}
      >
        {description?.toUpperCase()}
      </Typography>
      <img
        style={{ width: "224px", height: "224px", padding: "24px" }}
        src={imagesWeather()}
        alt="icon-weather"
      />
    </Box>
  );
};
