import { useState } from "react";
import EmploymentGroup from "../InputGroups/EmploymentGroup";
import { useUpdatedFormData } from "../../util/formdata";

const PreviousEmploymentInfo = (props) => {
  const [employmentHistory, setEmploymentHistory] = useState({});

  const handleInputChange = (name, value) => {
    setEmploymentHistory((prevHistory) => ({ ...prevHistory, [name]: value }));
  };

  useUpdatedFormData("employment", employmentHistory, props.onChange);

  return <EmploymentGroup num={1} onChange={handleInputChange} />;
};

export default PreviousEmploymentInfo;
