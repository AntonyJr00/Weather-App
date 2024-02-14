import { Box, Typography } from "@mui/material";

type propType = {
  main: {
    temp?: number;
    temp_max?: number;
    temp_min?: number;
  };
};
export const WeatherTemp = (props: propType) => {
  const { main } = props;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography
        color={"white"}
        fontSize={"92px"}
        fontWeight={400}
        fontFamily={"Oswald"}
      >
        {Math.trunc(main.temp || 0)}°c
      </Typography>
      <Typography
        color={"white"}
        fontSize={16}
        fontWeight={400}
        fontFamily={"Oswald"}
      >
        {Math.trunc(main.temp_max || 0)}° / {Math.trunc(main.temp_min || 0)}°
      </Typography>
    </Box>
  );
};
