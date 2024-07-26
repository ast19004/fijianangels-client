import { MenuList, MenuItem } from "@mui/material";

const FormsSubNavigation = (props) => {
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
    <MenuList id="subMenu" sx={{ display: props.open ? "block" : "none" }}>
      <MenuItem className="subMenuItem" onClick={handleRequestForm}>
        Request Care
      </MenuItem>
      <MenuItem className="subMenuItem" onClick={handleReviewForm}>
        Caregiver Review
      </MenuItem>
      <MenuItem className="subMenuItem" onClick={handleEmployeeForm}>
        Become Caregiver
      </MenuItem>
    </MenuList>
  );
};

export default FormsSubNavigation;
