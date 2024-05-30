import React, { useState } from 'react';
import Copy from '@assets/copy';

interface ApiDetails {
  endpoint: string;
  method: string;
  headers: Record<string, string>;
  body: Record<string, string>;
  response: {
    status: number;
    message: string;
  };
}

const DummyFolder: React.FC = () => {
  const [apiDetails, setApiDetails] = useState<ApiDetails | null>(null);

  const fetchApiDetails = () => {
    const response: ApiDetails = {
      endpoint: '/api/signup',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer <token>',
      },
      body: {
        username: 'string',
        password: 'string',
      },
      response: {
        status: 200,
        message: 'User signed up successfully',
      },
    };

    setApiDetails(response);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="flex flex-col items-center p-8">
      <button
        className="px-6 py-2 mb-6 text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={fetchApiDetails}
      >
        Get API Details
      </button>
      {apiDetails && (
        <div className="flex flex-col w-full max-w-3xl p-6 border rounded shadow-md">
          <div className="mb-4">
            <h3 className="text-lg font-bold">Endpoint</h3>
            <p>{apiDetails.endpoint}</p>
            <h4 className="mt-2 text-sm font-semibold">Method: {apiDetails.method}</h4>
          </div>
          <div className="mb-4 relative">
            <h3 className="text-lg font-bold">Headers</h3>
            <pre className="p-2 overflow-auto bg-gray-100 rounded">
              {JSON.stringify(apiDetails.headers, null, 2)}
            </pre>
            <button 
              className="absolute top-0 right-0 mt-1 mr-1 text-blue-500 hover:text-blue-700"
              onClick={() => copyToClipboard(JSON.stringify(apiDetails.headers, null, 2))}
            >
              <Copy />
            </button>
          </div>
          <div className="mb-4 relative">
            <h3 className="text-lg font-bold">Body</h3>
            <pre className="p-2 overflow-auto bg-gray-100 rounded">
              {JSON.stringify(apiDetails.body, null, 2)}
            </pre>
            <button 
              className="absolute top-0 right-0 mt-1 mr-1 text-blue-500 hover:text-blue-700"
              onClick={() => copyToClipboard(JSON.stringify(apiDetails.body, null, 2))}
            >
              <Copy />
            </button>
          </div>
          <div className="mb-4 relative">
            <h3 className="text-lg font-bold">Response</h3>
            <pre className="p-2 overflow-auto bg-gray-100 rounded">
              {JSON.stringify(apiDetails.response, null, 2)}
            </pre>
            <button 
              className="absolute top-0 right-0 mt-1 mr-1 text-blue-500 hover:text-blue-700"
              onClick={() => copyToClipboard(JSON.stringify(apiDetails.response, null, 2))}
            >
              <Copy />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DummyFolder;
