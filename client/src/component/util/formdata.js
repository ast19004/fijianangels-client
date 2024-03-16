import { useEffect } from "react";

export const useUpdatedFormData = (dataName, data, updateFunc) => {
  return useEffect(() => {
    if (!updateFunc) {
      return;
    }
    updateFunc(dataName, data);
  }, [data]);
};
