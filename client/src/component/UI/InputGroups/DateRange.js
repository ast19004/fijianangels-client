import { useState } from "react";
import FormDateInput from "../Inputs/FormDateInput";

const DateRange = (props) => {
  const [dates, setDates] = useState(props.range);

  const handleChange = (updatedDates) => {
    setDates((prevDates) => {
      return { ...prevDates, ...updatedDates };
    });
  };
  return (
    <>
      <FormDateInput
        id={props.startId}
        htmlFor={props.stateHtmlFor}
        label={props.startLabel}
        onChange={handleChange}
        value={dates.startDate}
      />
      <FormDateInput
        id={props.endId}
        htmlFor={props.endHtmlFor}
        label={props.endLabel}
        onChange={handleChange}
        value={dates.endDate}
      />
    </>
  );
};

export default DateRange;
