"use client"; 

import AuthForm from '@/components/ui/AuthForm';
import React, { useState, useEffect } from 'react';

const SignIn = () => {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    setShowDialog(true); 
  }, []);

  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type="sign-in" />

    
      {showDialog && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-auto text-center shadow-lg">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Guest Login</h2>
            <p className="text-gray-700 mb-3">Use the following credentials to log in as a guest:</p>
            
            <div className="bg-gray-100 rounded-md p-4 text-left mb-3">
              <p className="text-lg font-semibold"><span className="text-blue-600">Email:</span> guest01@gmail.com</p>
              <p className="text-lg font-semibold"><span className="text-blue-600">Password:</span> 12345678</p>
            </div>
            
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
              onClick={() => setShowDialog(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      
      {!showDialog && (
        <button
          className="fixed bottom-4 right-4 px-3 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none z-50"
          onClick={() => setShowDialog(true)}
        >
          Guest Login Info
        </button>
      )}
    </section>
  );
};

export default SignIn;
