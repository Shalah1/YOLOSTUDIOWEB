import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa'; 

export default function DesignPage() {
  const [redirecting, setRedirecting] = useState(true);

  useEffect(() => {
  
    const redirectTimeout = setTimeout(() => {
  
      window.location.href = 'https://www.figma.com/proto/sVb16DyNRAsBiqmUoMhlfr/TYS-Developer-Task?page-id=0%3A1&type=design&node-id=1-357&viewport=767%2C375%2C0.14&t=kUyUeT8gQjJuaxgr-1&scaling=scale-down';
    }, 2000); 

    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Redirecting to YOLOSTUDIO prototype...</h1>
        {redirecting && (
          <div className="text-blue-600">
            <FaSpinner className="animate-spin text-3xl" />
          </div>
        )}
      </div>
    </div>
  );
}
