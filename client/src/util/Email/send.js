import emailjs from "@emailjs/browser";
import capitalize from "../String/capitalize";
import uploadFileToFirebase from "../../util/Firebase/upload";

export const sendEmail = async (
  formContent,
  templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_1
) => {
  try {
    const emailResponse = await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      templateId,
      formContent,
      process.env.REACT_APP_EMAILJS_PUBLIC_ID
    );
    console.log(
      "Email sent successfully!",
      emailResponse.status,
      emailResponse.text
    );
    return emailResponse.status;
  } catch (error) {
    console.error("Error during email sending:", error);
    return error.status;
  }
};

export const sendCareRequestEmail = async (e) => {
  e.preventDefault();
  // Collect other form data
  const formData = new FormData(e.target);

  // Get services from options nodelist of selected values
  // and capitalize each service value
  const services =
    e.target.services.length > 1
      ? [...e.target.services]
          .map((service) => capitalize(service.value))
          .join(", ")
      : capitalize(e.target.services.value);

  // Convert FormData to an object for easier use with emailjs.send()
  const formObject = Object.fromEntries(formData.entries());

  // Add selected services
  formObject.services = services;
  formObject.reply_to = formObject.contact_email;

  const emailStatus = await sendEmail(formObject);
  return emailStatus;
};

export const sendApplicationEmail = async (e) => {
  e.preventDefault();
  //Get all data from form
  const formData = new FormData(e.target);
  const file = formData.get("resume_file");
  const fileUrl = await uploadFileToFirebase(file);
  // Convert FormData to an object for easier use with emailjs.send()
  const formObject = Object.fromEntries(formData.entries());

  //fileUrl is created from the form file outside this function
  formObject.reply_to = formObject.contact_email;
  formObject.resume_link = fileUrl;

  const emailStatus = await sendEmail(
    formObject,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID_2
  );
  return emailStatus;
};
