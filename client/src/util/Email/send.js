import emailjs from "@emailjs/browser";
import capitalize from "../String/capitalize";

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
  } catch (error) {
    console.error("Error during email sending:", error);
  }
};

export const sendCareRequestEmail = (e) => {
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

  sendEmail(formObject);
};

export const sendApplicationEmail = async (formData) => {
  const formObject = Object.fromEntries(formData.entries());
  console.log(formObject);
  // try {
  //   const emailParams = {
  //     first_name: formData.get("first_name"),
  //     last_name: formData.get("last_name"),
  //     contact_phone: formData.get("contact_phone"),
  //     contact_email: formData.get("contact_email"),
  //     // file_link: fileUrl, // Pass file URL to email template
  //   };

  //   const emailResponse = await emailjs.send(
  //     process.env.REACT_APP_EMAILJS_SERVICE_ID,
  //     process.env.REACT_APP_EMAILJS_TEMPLATE_ID_2,
  //     emailParams,
  //     process.env.REACT_APP_EMAILJS_PUBLIC_ID
  //   );

  //   console.log(
  //     "Email sent successfully!",
  //     emailResponse.status,
  //     emailResponse.text
  //   );
  // } catch (error) {
  //   console.error("Error during email sending:", error);
  //   // console.error(
  //   //   "Error during file upload, email sending, or file deletion:",
  //   //   error
  //   // );
  // }
};
