import { useEffect } from "react";

import { saveState } from "../../../util/formdata";

const FormStep = ({ parentComponent, childComponent, ...props }) => {
  const ParentComponent = parentComponent;
  const ChildComponent = childComponent;

  const useSaveState = (dataValue, saveFunction) => {
    useEffect(() => {
      saveState(dataValue, saveFunction);
      console.log("save success");
    }, [props.progress]);
  };
  return parentComponent ? (
    <ParentComponent>
      <ChildComponent {...props} useSaveState={useSaveState} />
    </ParentComponent>
  ) : (
    <ChildComponent />
  );
};

export default FormStep;
