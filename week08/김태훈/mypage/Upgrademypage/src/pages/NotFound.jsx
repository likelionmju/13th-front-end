import NavBar from '../components/NavBar';
import React from 'react';


export default function NotFound() {
  return (
    <>
      <NavBar />
      <div className="h-screen flex items-center justify-center text-4xl font-bold">
        404 - Page Not Found
      </div>
    </>
  );
}