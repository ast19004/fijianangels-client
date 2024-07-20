import FormDateInput from "../Inputs/FormDateInput";

const DateRange = (props) => {
  return (
    <>
      <FormDateInput
        id={props.startId}
        htmlFor={props.startId}
        label={props.startLabel}
        onChange={props.onChange}
        onBlur={props.onValidate}
        value={props.startValue}
        helperText={props.startHelperText}
        inputProps={props.inputProps}
      />
      <FormDateInput
        id={props.endId}
        htmlFor={props.endId}
        label={props.endLabel}
        onChange={props.onChange}
        onBlur={props.onValidate}
        value={props.endValue}
        helperText={props.endHelperText}
        inputProps={props.inputProps}
      />
    </>
  );
};

export default DateRange;
