import React, { useState } from 'react';
import DataVisualization from './data-visualization';
import DataExport from './data-export';
import FileUpload from './file-upload';
import SignOut from './signout'; 
import Layout from './layout';

export default function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('visualization');

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'visualization':
        return <DataVisualization />;
      case 'export':
        return <DataExport />;
      case 'upload':
        return <FileUpload />;
      case 'Signout': 
        return <SignOut />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-8 md:p-16 lg:p-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">DATAVIZTRACK</h1>
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <button
            className={`bg-blue-500 hover:bg-blue-900 text-white py-2 px-6 sm:px-8 md:px-10 lg:px-12 rounded ${
              activeComponent === 'visualization' ? 'bg-blue-600' : ''
            }`}
            onClick={() => setActiveComponent('visualization')}
          >
            Data Visualization
          </button>
          <button
            className={`bg-green-600 hover:bg-green-900 text-white py-2 px-6 sm:px-8 md:px-10 lg:px-12 rounded ${
              activeComponent === 'export' ? 'bg-green-600' : ''
            }`}
            onClick={() => setActiveComponent('export')}
          >
            Data Export
          </button>
          <button
            className={`bg-yellow-400 hover:bg-yellow-600 text-white py-2 px-6 sm:px-8 md:px-10 lg:px-12 rounded ${
              activeComponent === 'upload' ? 'bg-yellow-600' : ''
            }`}
            onClick={() => setActiveComponent('upload')}
          >
            File Upload
          </button>

          <button
            className={`bg-red-700 hover:bg-red-600 text-white py-2 px-6 sm:px-8 md:px-10 lg:px-12 rounded ${
              activeComponent === 'Signout' ? 'bg-red-600' : '' 
            }`}
            onClick={() => setActiveComponent('Signout')}
          >
            Signout
          </button>
        </div>
        {renderActiveComponent()}
      </div>
    </Layout>
  );
}
