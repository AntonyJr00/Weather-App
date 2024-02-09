import { Box, Typography } from "@mui/material";
import { getCountry } from "../../helper/getCountriesForISO";
type propType = {
  name: string;
  country: string;
};
export const WeatherLocations = (props: propType) => {
  const { name, country } = props;
  const isoName = getCountry(country);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography color={"white"} fontSize={"64px"} fontWeight={400}>
        {name || "City"}
      </Typography>
      <Typography color={"white"} fontSize={"18px"} fontWeight={400}>
        Country: {isoName}
      </Typography>
    </Box>
  );
};
