import { Box, Typography } from "@mui/material";
import { getCountry } from "../../helper/getCountriesForISO";
import { cyan } from "@mui/material/colors";
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
      <Typography
        color={"white"}
        fontSize={"52px"}
        fontWeight={400}
        fontFamily={"Oswald"}
      >
        {name || "City"}
      </Typography>
      <Box
        display={"flex"}
        gap={1}
        justifyContent={"center"}
        alignItems={"baseline"}
      >
        <Typography
          color={"#f1f1f1"}
          fontSize={"16px"}
          fontWeight={500}
          fontFamily={"Oswald"}
        >
          Country:{" "}
        </Typography>
        <Typography
          color={"white"}
          paddingX={2}
          borderRadius={3}
          fontSize={"16px"}
          fontWeight={300}
          fontFamily={"Oswald"}
          bgcolor={cyan[200]}
        >
          {isoName}
        </Typography>
      </Box>
    </Box>
  );
};
