import { Box, Button } from "@mui/material";
import FormTextInput from "../Inputs/FormTextInput";
import FormEmailInput from "../Inputs/FormEmailInput";

const Reference = ({ id, data, onChange, onRemove, index}) => {

  const handleInputChange = (name, value) => {
    onChange(id, {...data, [name]: value});
  };

  return (
    <Box component="fieldset" sx={{ border: '2px solid pink', borderRadius: '1rem', padding: '0.5rem', margin: '1rem 0'}}>
      <legend style={{color: '#066988'}}>{`Reference #0${index}`}</legend>
      <FormTextInput
        id="name"
        label={`Reference Name`}
        value={data.name}
        onChange={handleInputChange}
      />

      <FormTextInput
        id="relationship"
        label="Relationship:"
        value={data.relationship}
        onChange={handleInputChange}
      />

      {/* <FormTextInput
        id={`company${props.num}`}
        label="Company:"
        value={props.company}
        onChange={handleInputChange}
      /> */}

      {/* <FormTextInput
        id={`${props.refName}_address`}
        label="Address:"
        value={reference[`${props.refName}_address`]}
        onChange={handleInputChange}
      /> */}

      <FormEmailInput
        id="email"
        label="Email"
        value={data.email}
        onChange={ handleInputChange}
      />
      <FormTextInput
        id="phone"
        label="Phone:"
        value={ data.phone}
        onChange={handleInputChange}
      />
      <Button onClick={() => onRemove(id)} sx={{border: '1px solid rgb(6,105,136)'}}>Remove</Button>
    </Box>
  );
};

export default Reference;
