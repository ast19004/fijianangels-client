import capitalize from "../String/capitalize";

/**
 * HELPER: Sends FormData to a specific route on the server.
 */
const sendToBackend = async (formData, route) => {
  try {
    const response = await fetch(route, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    return response.status;
  } catch (error) {
    console.error(`Error connecting to ${route}:`, error);
    return 500;
  }
};

export const sendCareRequestEmail = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  // Formatting the services
  const servicesInput = e.target.services;
  const servicesString = servicesInput.length > 1
      ? [...servicesInput].map((s) => capitalize(s.value)).join(", ")
      : capitalize(servicesInput.value);

  formData.set("services", servicesString);
  
  // Hitting care request route
  return await sendToBackend(formData, "/form/carerequest");
};

export const sendApplicationEmail = async (e, references) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  const file = formData.get("resume_file");
  formData.append("file", file); // Must match backend upload.single("file")

  // Attach references as a string
  formData.append("references", JSON.stringify(references));

  // Hitting employment route
  return await sendToBackend(formData, "/form/employment");
};