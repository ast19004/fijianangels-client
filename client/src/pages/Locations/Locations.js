import { Box } from "@mui/material";
import OfficeAddress from "./OfficeAddress/OfficeAddress";

const Locations = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        "@media(min-width: 60rem)": {
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "repeat(4, 1fr)",
        },
        ...props.sx,
      }}
    >
      <OfficeAddress
        mainOffice
        officeTitle="Main Office"
        // officeCoverage=""
        officeAddress="8784 Twinberry Way, Elk Grove CA"
      />
      <OfficeAddress
        officeTitle="Golden Gate Regional Center"
        //         officeCoverage="Covers
        // Marin County, San Mateo County, & San Francisco County"
        officeAddress="95 Third Street, 2nd Floor, San Francisco 94103"
      />
      <OfficeAddress
        officeTitle="Alta Regional Center"
        //         officeCoverage="Covers Alpine, Colusa,
        // El Dorado, Nevada, Placer, Sacramento, Sierra, Sutter, Yolo & Yuba County"
        officeAddress="695 Summit Lakes Way, Galt CA 95632"
      />
      <OfficeAddress
        officeTitle="Regional Center East Bay"
        //         officeCoverage="Covers Alameda
        // County & Contra Costa County"
        officeAddress="2001 Addison Street, Berkeley CA"
      />
    </Box>
  );
};

export default Locations;
