import React, { useState } from 'react';
import Layout from './layout';
  

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFileLink, setUploadedFileLink] = useState(null); 

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const uploadFile = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);


      fetch('/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {

          console.log('File upload response:', data);

      
          setUploadedFileLink(data.link); 
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    }
  };



  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl font-semibold mb-4">File Upload Page</h1>

      {uploadedFileLink && (
        <div className="mt-4">
          <p>
            Uploaded File: <a href={uploadedFileLink} download>{selectedFile.name}</a>
          </p>
        </div>
      )}

      <label className="text-lg text-gray-600 mt-4">
        Select a CSV file:::
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="mt-2 border rounded-md p-2"
        />
      </label>
      {selectedFile && (
        <div className="mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={uploadFile}
          >
            Upload File
          </button>
        </div>
      )}

    
    </div>
  );
}
