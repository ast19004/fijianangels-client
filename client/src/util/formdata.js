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

export const saveState = (dataValue, saveFunc) => {
  saveFunc(dataValue);
};

export const convertFromToPDF = (formData) => {};
