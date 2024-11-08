const {getStorage} = require("firebase-admin/storage");

// const ONE_MONTH_IN_MS = 30 * 24 * 60 * 60 * 1000;

const ONE_MONTH_IN_MS = 1000; // 30 days in milliseconds

exports.deleteOldFiles = async () => {
  /** Clear out all files that are older than one month since creation **/
  const storage = getStorage().bucket(); // Initialize storage bucket reference
  const [files] = await storage.getFiles();

  const now = Date.now();
  const promises = files.map(async (file) => {
    const [metadata] = await file.getMetadata();
    const creationTime = new Date(metadata.timeCreated).getTime();

    if (now - creationTime > ONE_MONTH_IN_MS) {
      await file.delete();
      console.log(`Deleted file: ${file.name}`);
    }
  });

  await Promise.all(promises);
  console.log("Old files cleanup completed.");
};
