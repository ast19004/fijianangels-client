import storage from "./config";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const uploadFileToFirebase = async (file) => {
  try {
    // Create a reference to the file's location in Firebase storage
    const storageRef = ref(storage, `resumes/${file.name}`);

    // Upload the file with the resumable upload function
    const uploadTask = await uploadBytesResumable(storageRef, file);

    // Get the download URL after the file is uploaded
    const downloadURL = await getDownloadURL(uploadTask.ref);
    // Return the download URL to use in your form submission or elsewhere
    return downloadURL;
  } catch (error) {
    console.error("File upload failed", error);
    throw error;
  }
};

export default uploadFileToFirebase;
