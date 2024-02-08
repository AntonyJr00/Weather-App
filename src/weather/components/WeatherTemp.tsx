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
      paddingBottom={2}
    >
      <Typography color={"white"} fontSize={"112px"} fontWeight={400}>
        {Math.trunc(main.temp || 0)}°c
      </Typography>
      <Typography color={"white"} fontSize={18} fontWeight={400}>
        {Math.trunc(main.temp_max || 0)}° / {Math.trunc(main.temp_min || 0)}°
      </Typography>
    </Box>
  );
};
