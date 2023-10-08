import React from 'react';
import { HiOutlineDocumentDownload, HiOutlinePhotograph, HiOutlineDocumentText } from 'react-icons/hi'; 

export default function DataExport() {
  const exportToPDF = () => {

  };

  const exportToPNG = () => {

  };

  const exportToCSV = () => {
  
    const csvData = 'Your CSV data here';
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'exported-data.csv';
    a.click();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl font-semibold mb-4">Data Export Page</h1>
      <div className="space-y-4">
    
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded flex items-center"
          onClick={exportToCSV}
        >
          <HiOutlineDocumentText className="mr-2" /> Export to CSV
        </button>
      </div>
  
    </div>
  );
}
