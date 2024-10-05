import { Box, Typography } from "@mui/material";
import OfficeAddress from "./OfficeAddress/OfficeAddress";
import PhoneLink from "../../component/UI/Links/PhoneLink/PhoneLink";

const Locations = (props) => {
  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}
    >
      <OfficeAddress
        mainOffice
        sx={{ gridColumn: "1/-1", justifySelf: "center" }}
        officeTitle="Main Office"
        officeCoverage=""
        officeAddress="8784 Twinberry Way, Elk Grove CA"
      />
      <Box
        id="section-phone"
        sx={{ gridColumn: "1/-1", justifySelf: "center", marginTop: "-0.5rem" }}
      >
        <Typography
          color="rgba(2, 26, 51, 0.9)"
          lineHeight={2}
          sx={{ textAlign: "right" }}
        >
          Office # <PhoneLink tel="5106127595">(510)612-7595</PhoneLink> /{" "}
          <PhoneLink tel="6505180532">(650)518-0532</PhoneLink>
        </Typography>
        <Typography
          color="rgba(2, 26, 51, 0.9)"
          lineHeight={2}
          sx={{ textAlign: "right" }}
        >
          <PhoneLink tel="5108129475">(510)812-9475</PhoneLink>{" "}
          <PhoneLink tel="7244344646">(724)434-4646</PhoneLink>
        </Typography>
      </Box>
      <OfficeAddress
        officeTitle="Golden Gate Regional Center"
        officeCoverage="Covers
Marin County, San Mateo County, & San Francisco County"
        officeAddress="95 Third Street, 2nd Floor, San Francisco 94103"
      />
      <OfficeAddress
        officeTitle="Alta Regional Center"
        officeCoverage="Covers Alpine, Colusa,
El Dorado, Nevada, Placer, Sacramento, Sierra, Sutter, Yolo & Yuba County"
        officeAddress="695 Summit Lakes Way, Galt CA 95632"
      />
      <OfficeAddress
        officeTitle="Regional Center East Bay"
        officeCoverage="Covers Alameda
County & Contra Costa County"
        officeAddress="2001 Addison Street, Berkley CA"
      />
    </Box>
  );
};

export default Locations;
