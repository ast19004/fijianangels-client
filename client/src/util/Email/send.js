import capitalize from "../String/capitalize";

/**
 * HELPER: Sends FormData to a specific route on the server.
 */
export const sendToBackend = async (route, formData) => {
  try {
    const response = await fetch(route, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    return await response.json(); 
  } catch (error) {
    console.error(`Error connecting to ${route}:`, error);
    // REMOVE the res.status(500) line. Just return the error.
    return { success: false, error: error.message };
  }
};

export const sendCareRequestEmailData = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  // Formatting the services
  const servicesInput = e.target.services;
  const servicesString = servicesInput.length > 1
      ? [...servicesInput].map((s) => capitalize(s.value)).join(", ")
      : capitalize(servicesInput.value);

  formData.set("services", servicesString);

  // Hitting care request route

  return await sendToBackend("/form/carerequest", formData);
};


export const sendApplicationEmailData = async (e, references) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  const file = formData.get("resume_file");
  formData.delete("resume_file"); //remove file to readd it under another filename
  formData.append("file", file); // Must match backend upload.single("file")

  // Attach references as a string
  formData.append("references", JSON.stringify(references));

  // Hitting employment route
  return await sendToBackend("/form/employment", formData);
};