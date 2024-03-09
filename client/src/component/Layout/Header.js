import * as React from "react";
import {
  IconButton,
  Typography,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import AnchorLink from "../UI/AnchorLink";
import { useNavigate } from "react-router-dom";

function Header() {
  const [open, setOpen] = React.useState(false);
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  function handleToggleFormSubMenu(event) {
    setSubMenuOpen((prevState) => !prevState);
  }
  function handleLink(event, link) {
    event.preventDefault();
    navigate(link);
    handleClose(event);
  }
  function handleEmployeeForm(event) {
    handleLink(event, "/employment-form");
  }

  function handleRequestForm(event) {
    handleLink(event, "/homecare-request-form");
  }

  function handleReviewForm(event) {
    handleLink(event, "/caregiver-review-form");
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <header>
      <Stack direction="row" spacing={0}>
        <IconButton
          ref={anchorRef}
          id="nav-button"
          aria-controls={open ? "nav-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          onMouseEnter={() => setOpen(true)}
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon sx={{ fill: "#ca4766" }} />
        </IconButton>
        <Popper
          open={open}
          onMouseLeave={() => setOpen(false)}
          anchorEl={anchorRef.current}
          role="navigation"
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper elevation={24} variant="outlined" square={false}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    sx={{
                      color: "#066988",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    autoFocusItem={open}
                    id="nav-menu"
                    aria-labelledby="nav-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem className="menuItem" onClick={handleClose}>
                      <AnchorLink href="#staff">About</AnchorLink>
                    </MenuItem>
                    <MenuItem className="menuItem" onClick={handleClose}>
                      <AnchorLink href="#services">Services</AnchorLink>
                    </MenuItem>
                    <MenuItem className="menuItem" onClick={handleClose}>
                      <AnchorLink href="#prices">Prices</AnchorLink>
                    </MenuItem>
                    <MenuItem className="menuItem" onClick={handleClose}>
                      <AnchorLink href="#contact">Contact</AnchorLink>
                    </MenuItem>

                    <MenuItem
                      className="menuItem"
                      onClick={handleToggleFormSubMenu}
                      onMouseEnter={() => setSubMenuOpen(true)}
                      onMouseLeave={() => setSubMenuOpen(false)}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                      }}
                    >
                      Forms
                      <MenuList
                        id="subMenu"
                        sx={{ display: subMenuOpen ? "block" : "none" }}
                      >
                        <MenuItem
                          className="subMenuItem"
                          onClick={handleRequestForm}
                        >
                          Client (New)
                        </MenuItem>
                        <MenuItem
                          className="subMenuItem"
                          onClick={handleEmployeeForm}
                        >
                          Employee
                        </MenuItem>
                        <MenuItem
                          className="subMenuItem"
                          onClick={handleReviewForm}
                        >
                          Review Caregiver
                        </MenuItem>
                      </MenuList>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Stack>
      <Typography>FIJIAN ANGELS HOMECARE</Typography>
    </header>
  );
}

export default Header;
