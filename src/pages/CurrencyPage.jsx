import React from 'react';
import { CurrencyView } from '../components/CurrencyView';
import { NavBar } from '../components/NavBar';

export const CurrencyPage = () => {
    return (
        <div className='flex justify-center bg-slate-700'>
            <NavBar />
            <CurrencyView />
        </div>
    );
};
