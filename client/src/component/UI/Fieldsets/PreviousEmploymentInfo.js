import { useState } from "react";
import EmploymentGroup from "../InputGroups/EmploymentGroup";
import { useUpdatedFormData, updateInput } from "../../util/formdata";

const PreviousEmploymentInfo = (props) => {
  const [employmentHistory, setEmploymentHistory] = useState({});

  const handleChange = (name, value) => {
    updateInput(name, value, setEmploymentHistory);
  };

  useUpdatedFormData("employment", employmentHistory, props.onChange);

  return <EmploymentGroup num={1} onChange={handleChange} />;
};

export default PreviousEmploymentInfo;
