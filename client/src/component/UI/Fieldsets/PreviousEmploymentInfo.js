import { useEffect, useState } from "react";
import EmploymentGroup from "../InputGroups/EmploymentGroup";

const PreviousEmploymentInfo = (props) => {
  const [employmentHistory, setEmploymentHistory] = useState({});

  const handleInputChange = (name, value) => {
    setEmploymentHistory((prevHistory) => ({ ...prevHistory, [name]: value }));
  };

  useEffect(() => {
    if (!props.onChange) {
      return;
    }
    props.onChange("employment", employmentHistory);
  }, [employmentHistory]);

  return <EmploymentGroup num={1} onChange={handleInputChange} />;
};

export default PreviousEmploymentInfo;
