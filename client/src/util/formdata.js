import { useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;

export const useUpdateFormData = (dataName, data, updateFunc, errors) => {
  return useEffect(() => {
    if (!updateFunc || errors) {
      return;
    }
    updateFunc(dataName, data);
  }, [data]);
};

export const updateInput = (name, value, setState) => {
  setState((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

//Set new values to an existing object. Values with corresponding keys in the old object will have overwritten value
export const updateObj = (obj, newValues, setFunction) => {
  const updatedObj = { ...obj, ...newValues };
  setFunction(updatedObj);
};

export const saveState = (dataValue, saveFunc) => {
  saveFunc(dataValue);
};

export const getPDFDataUrl = async (file, setDataUrl) => {
  if (file && file.type === "application/pdf") {
    const fileReader = new FileReader();

    fileReader.onload = async function () {
      const typedArray = new Uint8Array(this.result);
      const dataUrl = await renderPDF(typedArray);
      setDataUrl(dataUrl);
    };

    fileReader.readAsArrayBuffer(file);
  } else {
    setDataUrl("");
  }
};

export const renderPDF = async (pdfData) => {
  const pdfDoc = await pdfjsLib.getDocument({ data: pdfData }).promise;
  const page = await pdfDoc.getPage(1); // Get the first page

  const scale = 1;
  const viewport = page.getViewport({ scale });

  // Dynamically create an offscreen canvas
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Set the canvas dimensions based on the PDF page's viewport
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  // Render PDF page into the canvas context
  await page.render({ canvasContext: ctx, viewport: viewport }).promise;

  // Convert the canvas to data URL
  const dataUrl = canvas.toDataURL(); //The base64-encoded image is logged

  // Clean up the canvas if necessary (optional)
  canvas.remove();
  return dataUrl;
};
