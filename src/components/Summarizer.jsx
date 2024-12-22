import React, { useState } from "react";
import axios from "axios";

const Summarizer = () => {
  const [pdfText, setPdfText] = useState("");

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5000/extract-text", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setPdfText(response.data.text); // Assume the backend returns the extracted text in `text`
    } catch (error) {
      console.error("Error extracting text:", error);
    }
  };

  return (
    <div>
      <h1>PDF Summarizer</h1>
      <input type="file" accept="application/pdf" onChange={handleFileUpload} />
      <textarea readOnly value={pdfText} rows="20" cols="50" />
    </div>
  );
};

export default Summarizer;
