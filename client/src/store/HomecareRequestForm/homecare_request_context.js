import React, { useState } from "react";
import { getTodaysDate } from "../../util/Date";
import { updateObj } from "../../util/formdata";

export const HomecareRequestContext = React.createContext({
  //CareRequester Info
  careRequester: {
    fullName: {
      first_name: "",
      middle_name: "",
      last_name: "",
    },
    contact: { contact_phone: "", contact_email: "" },
  },

  //Services Needed
  requestedServices: [],

  //Additional Info
  additional_info: "",

  //Update Functions
  updateCareRequester: (newValues) => {},
  updateRequestedServices: (newValues) => {},
  updateAdditionalInfo: (value) => {},
});

export const HomecareRequestContextProvider = (props) => {
  //Update Functions
  const handleUpdateCareRequester = (newValues) => {
    updateObj(careRequester, newValues, setCareRequester);
  };

  const handleUpdateRequestedServices = (newValues) => {
    updateObj(requestedServices, newValues, setRequestedServices);
  };

  const handleUpdateAdditionalInfo = (value) => {
    setAdditionalInfo(value);
  };

  //CareRequester Info
  const [careRequester, setCareRequester] = useState({
    fullName: {
      first_name: "",
      middle_name: "",
      last_name: "",
    },
    contact: { contact_phone: "", contact_email: "" },
  });

  //Services Needed
  const [requestedServices, setRequestedServices] = useState([]);

  //Additional Info
  const [additionalInfo, setAdditionalInfo] = useState("");

  return (
    <HomecareRequestContext.Provider
      value={{
        careRequester: careRequester,
        requestedServices: requestedServices,
        additionalInfo: additionalInfo,
        updateCareRequester: handleUpdateCareRequester,
        updateRequestedServices: handleUpdateRequestedServices,
        updateAdditionalInfo: handleUpdateAdditionalInfo,
      }}
    >
      {props.children}
    </HomecareRequestContext.Provider>
  );
};

export default HomecareRequestContext;
