import { useEffect } from "react";

export const useUpdateFormData = (dataName, data, updateFunc, errors) => {
  return useEffect(() => {
    if (!updateFunc || errors) {
      return;
    }
    updateFunc(dataName, data);
  }, [data]);
};

export const updateInput = (name, value, setState) => {
  setState((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

//Set new values to an existing object. Values with corresponding keys in the old object will have overwritten value
export const updateObj = (obj, newValues, setFunction) => {
  console.log("prevObj: ", obj);
  console.log("newValues: ", newValues);
  const updatedObj = { ...obj, ...newValues };
  setFunction(updatedObj);
  console.log("updatedObj: ", updatedObj);
};

export const saveState = (dataValue, saveFunc) => {
  saveFunc(dataValue);
};

export const convertFromToPDF = (formData) => {};
