import { ButtonGroup } from "@mui/material";
import BackButton from "../Buttons/BackButton";
import NextButton from "../Buttons/NextButton";

const ProgressButtons = (props) => {
  return (
    <ButtonGroup>
      {!props.first && <BackButton onClick={props.onPrev} />}
      {!props.last && <NextButton onClick={props.onNext} />}
    </ButtonGroup>
  );
};

export default ProgressButtons;
