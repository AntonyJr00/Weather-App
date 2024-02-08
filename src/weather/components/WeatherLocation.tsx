import { Box, Typography } from "@mui/material";
type propType = {
  name: string;
};
export const WeatherLocations = (props: propType) => {
  const { name } = props;
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Typography color={"white"} fontSize={"60px"} fontWeight={400}>
        {name || "City"}
      </Typography>
    </Box>
  );
};
