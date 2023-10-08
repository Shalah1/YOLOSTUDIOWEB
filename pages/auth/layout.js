import React from 'react';
import Header from './header';
import Footer from './footer';
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto p-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
