import * as React from "react";
import { Button } from "@mui/material";
import MainNavigation from "./Navigation/MainNavigation";

import logo from "../../assests/images/svg/fijian-angels-logo.svg";

function Header() {
  return (
    <header>
      <MainNavigation />
      <Button
        href="/"
        sx={{
          margin: 0,
          fontFamily: "Roboto,Helvetica,Arial,sans-serif",
          fontWeight: 400,
          fontSize: "1rem",
          lineHeight: 1.5,
          letterSpacing: "0.00938em",
          color: "#ca4766",
        }}
      >
        <img className="App-logo" src={logo} alt="Fijian Angels Logo" />
      </Button>
    </header>
  );
}

export default Header;
