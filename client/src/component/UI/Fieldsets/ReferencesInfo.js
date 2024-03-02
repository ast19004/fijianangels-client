import { TextField, FormLabel, FormControl } from "@mui/material";

const ReferencesInfo = () => {
  return (
    <fieldset>
      <legend>References:</legend>
      <p>Please list three professional references.</p>
      {["1", "2", "3"].map((num) => (
        <fieldset>
          <legend>Reference #{num}</legend>
          <FormControl>
            <FormLabel htmlFor={`ref${num}-full-name`}>Full Name</FormLabel>

            <TextField id={`ref${num}-full-name`} type="text" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={`ref${num}-relationship`}>
              Relationship:
            </FormLabel>

            <TextField id={`ref${num}-relationship`} type="text" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={`ref${num}-company`}>Company:</FormLabel>

            <TextField id={`ref${num}-company`} type="text" />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor={`ref${num}-address`}>Address:</FormLabel>
            <TextField id={`ref${num}-address`} type="text" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={`ref${num}-phone`}>Phone:</FormLabel>

            <TextField id={`ref${num}-phone`} type="tel" />
          </FormControl>
        </fieldset>
      ))}
    </fieldset>
  );
};

export default ReferencesInfo;
