import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from './auth/layout';
import styles from '../styles/home.module.css';

export default function Home() {
  const [zooming, setZooming] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setZooming((prevZooming) => !prevZooming);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Layout>
      <div className="bg-gray-300 p-4 mt-0 rounded-md text-center">
        <h1 className="text-4xl font-bold">Welcome to DATAVIZTRACK</h1>
      </div>
      <p className="text-center text-lg text-gray-800 mt-8">
        <span className="italic">HI!</span>
        <br />
        <span className={`italic ${zooming ? styles['zoom-in'] : styles['zoom-out']}`}>
          LOGIN OR REGISTRATION NOW!
        </span>
      </p>
      <div className="flex flex-col items-center justify-center md:flex-row space-y-5 md:space-y-0 md:space-x-5 mt-8">
        <Link href="http://localhost:8000/auth/login" legacyBehavior>
          <a className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded block md:inline-block">
            Log In
          </a>
        </Link>
        <Link href="http://localhost:8000/auth/registration" legacyBehavior>
          <a className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded block md:inline-block">
            Registration
          </a>
        </Link>
        <Link href="http://localhost:8000/design" legacyBehavior>
          <a className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded block md:inline-block">
            DesignTask
          </a>
        </Link>

      
      </div>
    </Layout>
  );
}
