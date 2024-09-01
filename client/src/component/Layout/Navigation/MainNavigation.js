import * as React from "react";
import {
  IconButton,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import AnchorLink from "../../UI/AnchorLink";
// import FormsSubNavigation from "./FormsSubNavigation";

const MainNavigation = (props) => {
  const [open, setOpen] = React.useState(false);
  // const [subMenuOpen, setSubMenuOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

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

  // function handleToggleFormSubMenu(event) {
  //   setSubMenuOpen((prevState) => !prevState);
  // }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  function handleLink(event, link) {
    event.preventDefault();
    const baseURL = window.location.origin;
    window.open(`${baseURL}${link}`, "_blank");
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

  return (
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
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [-20, 10], // Adjust this to control the offset from the anchor element
            },
          },
        ]}
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: "left top" }}
            timeout={500}
          >
            <Paper
              sx={{
                padding: "1rem",
                maxWidth: "300",
                boxShadow:
                  "0px 2px 4px, rgba(0, 0, 0, 0.12), 0px 3px 6px, rgba(0, 0, 0, 0.24)",
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  className="main-nav__list"
                  sx={{
                    color: "#066988",
                    // display: "flex",
                    flexDirection: "column",
                  }}
                  autoFocusItem={open}
                  id="nav-menu"
                  aria-labelledby="nav-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem
                    className="menuItemLink"
                    onClick={handleRequestForm}
                  >
                    Get Care
                  </MenuItem>
                  <MenuItem className="menuItem" onClick={handleClose}>
                    <AnchorLink href="#services" offset="150">
                      Services
                    </AnchorLink>
                  </MenuItem>
                  <MenuItem className="menuItem" onClick={handleClose}>
                    <AnchorLink href="#staff">About Us</AnchorLink>
                  </MenuItem>
                  {/* <MenuItem className="menuItem" onClick={handleClose}>
                    <AnchorLink href="#prices">Prices</AnchorLink>
                  </MenuItem> */}
                  <MenuItem className="menuItem" onClick={handleClose}>
                    <AnchorLink href="#contact" offset="240">
                      Contact
                    </AnchorLink>
                  </MenuItem>
                  <MenuItem className="menuItemLink" onClick={handleReviewForm}>
                    Review
                  </MenuItem>
                  <MenuItem
                    className="menuItemLink"
                    onClick={handleEmployeeForm}
                  >
                    Employment
                  </MenuItem>
                  {/* <MenuItem
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
                    <FormsSubNavigation open={subMenuOpen} />
                  </MenuItem> */}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
};

export default MainNavigation;
