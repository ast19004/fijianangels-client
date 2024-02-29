import { TextField, FormLabel, FormControl } from "@mui/material";

const ReferencesInfo = () => {
  return (
    <fieldset>
      <legend>References:</legend>
      <p>Please list three professional references.</p>
      <fieldset>
        <legend>Reference #1</legend>
        <FormControl>
          <FormLabel htmlFor="ref1-full-name">Full Name</FormLabel>

          <TextField id="ref1-full-name" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="ref1-relationship">Relationship:</FormLabel>

          <TextField id="ref1-relationship" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="ref1-company">Company:</FormLabel>

          <TextField id="ref1-company" type="text" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="ref1-address">Address:</FormLabel>
          <TextField id="ref1-address" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="ref1-phone">Phone:</FormLabel>

          <TextField id="ref1-phone" type="tel" />
        </FormControl>
      </fieldset>

      <fieldset>
        <legend>Reference #2</legend>
        <FormControl>
          <FormLabel htmlFor="ref2-full-name">Full Name</FormLabel>

          <TextField id="ref2-full-name" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="ref2-relationship">Relationship:</FormLabel>

          <TextField id="ref2-relationship" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="ref2-company">Company:</FormLabel>

          <TextField id="ref2-company" type="text" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="ref2-address">Address:</FormLabel>
          <TextField id="ref2-address" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="ref2-phone">Phone:</FormLabel>

          <TextField id="ref2-phone" type="tel" />
        </FormControl>
      </fieldset>

      <fieldset>
        <legend>Reference #3</legend>
        <FormControl>
          <FormLabel htmlFor="ref3-full-name">Full Name</FormLabel>

          <TextField id="ref3-full-name" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="ref3-relationship">Relationship:</FormLabel>

          <TextField id="ref3-relationship" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="ref3-company">Company:</FormLabel>

          <TextField id="ref3-company" type="text" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="ref3-address">Address:</FormLabel>
          <TextField id="ref3-address" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="ref3-phone">Phone:</FormLabel>

          <TextField id="ref3-phone" type="tel" />
        </FormControl>
      </fieldset>
    </fieldset>
  );
};

export default ReferencesInfo;
