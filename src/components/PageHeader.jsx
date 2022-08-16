import React from 'react';

const PageHeader = (props) => {
    return (
        <div className="flex flex-col w-full items-center">
                <h1 className='text-3xl pt-14 font-mons text-slate-50'>
                    {props.text}
                </h1>
                <div className='bg-slate-700 h-0.5 w-60 mt-5 mb-20'></div> 
            </div>
    );
};

export  {PageHeader};


