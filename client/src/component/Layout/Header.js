import * as React from "react";
import { Button } from "@mui/material";
import MainNavigation from "./Navigation/MainNavigation";

import logo from "../../assests/images/svg/fijian-angels-logo.svg";

function Header() {
  return (
    <header>
      <MainNavigation />
      <Button href="/">
        <img className="App-logo" src={logo} alt="Fijian Angels Logo" />
      </Button>
    </header>
  );
}

export default Header;
