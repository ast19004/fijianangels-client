import emailjs from "@emailjs/browser";

import capitalize from "../String/capitalize";

const sendEmail = (e) => {
  //Prevent form reload
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

  // Convert FormData to a plain object
  const formObject = Object.fromEntries(formData.entries());

  // Add selected services
  formObject.services = services;
  formObject.reply_to = formObject.contact_email;
  console.log(formObject);
  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formObject,
      process.env.REACT_APP_EMAILJS_PUBLIC_ID
    )
    .then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
};

export default sendEmail;