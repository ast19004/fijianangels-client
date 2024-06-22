import { useState } from "react";
import EmploymentGroup from "../InputGroups/EmploymentGroup";
// import { useUpdateFormData, updateInput } from "../../../util/formdata";

const PreviousEmploymentInfo = (props) => {
  const [employmentHistory, setEmploymentHistory] = useState({});

  // const handleChange = (name, value) => {
  //   updateInput(name, value, setEmploymentHistory);
  // };

  // useUpdateFormData("employment", employmentHistory, props.onChange);

  return <EmploymentGroup num={1} />;
};

export default PreviousEmploymentInfo;
