import { useEffect } from "react";

export const useUpdatedFormData = (dataName, data, updateFunc) => {
  return useEffect(() => {
    if (!updateFunc) {
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

export const convertFromToPDF = (formData) => {};
