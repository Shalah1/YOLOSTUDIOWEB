
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4">

      <p className="text-center text-gray-100">&copy;
       {new Date().getFullYear()} Yolo Studio</p>
    </footer>
  );
}
