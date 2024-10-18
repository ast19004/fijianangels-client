import storage from "./config";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const uploadFileToFirebase = (file) => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Handle progress if needed
      },
      (error) => {
        console.error("File upload failed", error);
        reject(error);
      },
      () => {
        // File uploaded successfully, now get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};

export default uploadFileToFirebase;
