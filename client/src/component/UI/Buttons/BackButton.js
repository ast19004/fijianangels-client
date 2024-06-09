import { Button } from "@mui/material";

const BackButton = (props) => {
  const goBack = (e) => {
    return props.onClick();
  };
  return <Button onClick={goBack}>Go Back</Button>;
};

export default BackButton;
