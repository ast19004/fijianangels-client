import { response } from "express";
import capitalize from "../String/capitalize";

/**
 * HELPER: Sends FormData to a specific route on the server.
 */
export const sendToBackend = async (route, formData) => {
  console.log("In sendToBackend...");
  try {
    const response = await fetch(route, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    console.log(response.status);
    return response.status;
  } catch (error) {
    console.error(`Error connecting to ${route}:`, error);
    response.status(500).json({ 
      success: false, 
      error: error.message, // This sends the specific error to the BROWSER
      stack: error.stack 
    });
  }
};

export const sendCareRequestEmailData = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
    console.log("In sendCareRequestEmailData")
  // Formatting the services
  const servicesInput = e.target.services;
  const servicesString = servicesInput.length > 1
      ? [...servicesInput].map((s) => capitalize(s.value)).join(", ")
      : capitalize(servicesInput.value);

  formData.set("services", servicesString);
  console.log(Object.fromEntries(formData)); 
  // Hitting care request route
  console.log(
  "Sending to '/form/carerequest'"
  )
  return await sendToBackend("/form/carerequest", formData);
};


export const sendApplicationEmailData = async (e, references) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  const file = formData.get("resume_file");
  formData.append("file", file); // Must match backend upload.single("file")

  // Attach references as a string
  formData.append("references", JSON.stringify(references));

  // Hitting employment route
  return await sendToBackend("/form/employment", formData);
};