import { Box, Typography } from "@mui/material";

type propType = {
  temp: number;
};
export const WeatherTemp = (props: propType) => {
  const { temp } = props;
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Typography color={"white"} fontSize={"128px"} fontWeight={400}>
        {Math.trunc(temp)}°c
      </Typography>
    </Box>
  );
};
