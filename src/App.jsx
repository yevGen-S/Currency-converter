import React from 'react';
import { NavBar } from './components/NavBar';
import "./App.css"

const App = () => {
  return (
    <>
      <NavBar />
        <div className='flex justify-center space-x-5 p-10 w-full h-screen bg-slate-600' >
          <p className='m-40 max-w-sm text-3xl text-center font-bold text-slate-900 hover:animate-spin'>
            This is the test project for learning.
          </p>
        </div>
    </> 
  );
};

export {App};