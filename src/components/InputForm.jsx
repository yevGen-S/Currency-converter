import React from 'react';
import { Symbols } from '../data/Symbols';

const InputForm = (props) => {
    return (
        <div className='flex flex-col mb-0'>  
            <h1 className='font-bold text-slate-100 pl-14'>{props.currency}</h1>
                <form className='flex flex-row items-center justify-center'>
                    <label className='font-medium text-slate-50'> {props.text}</label>

                    <input 
                        className='ml-5 border border-b-indigo-600 rounded-lg p-2'
                        type='number' 
                        value={props.amount} 
                        onChange={props.onAmountChange}
                        
                    /> 

                    <select 
                        value={props.currency}
                        onChange={props.onCurrencyChange}
                        className='bg-slate-100 hover:bg-slate-900 hover:text-slate-100 hover:duration-800 before:border after:border-none rounded-lg p-2 ml-2 font-bold'
                    > 
                        {props.currencies.map((currency) => (
                            <option key={currency} value={currency}>{Symbols.symbols[currency]}</option>
                        ))}
                    </select> 
                </form>            
        </div>
        
    );
};

export  {InputForm};
