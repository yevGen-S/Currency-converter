import React, {useEffect,useState} from 'react';
import axios from 'axios';

import { initialState, Rates } from '../data/Rates';
import { Symbols } from '../data/Symbols';
import { exchangeApiParams } from '../data/getRates';
import { AddViewedCurrency } from './AddViewedCurrency';
import { PageHeader } from './PageHeader';



const CurrencyView = () => {   
    const [baseCurrency, setBaseCurrency] = useState(Rates.data.base);
    const [rates, setRates] = useState(initialState.rates)
    const [selectorActive, setSelectorActive] = useState(false);

    const listOfViewedCurrencies = ['RUB','USD','EUR', 'AUD', 'UAH', 'UZS', 'TRY', 'CHF','SEK'];
    const [viewedCurrencies, setViewedCurrencies] = useState(listOfViewedCurrencies);

    const handleSelectorToggle = () => {
        setSelectorActive(prevState => !prevState);
    }

    
    const addViewedCurrency = (e) => {
        console.log([...viewedCurrencies, e.target.value]);
        setViewedCurrencies(prevState => [...prevState, e.target.value.slice(0,3)]);
        handleSelectorToggle();
    }

    useEffect(()=>{
    }, [viewedCurrencies])

    
    const getCurrencyInfo = async () => {
        await axios.get(exchangeApiParams.url + exchangeApiParams.request + 
        `?base=${baseCurrency}&apikey=${exchangeApiParams.apikey}`)
        .then((response) => {
            Rates.responseData = response.data;
            setRates(Rates.data.rates);
        })
        .catch((error) => {
            console.log(error);
        });
    }


    useEffect(() => {
        getCurrencyInfo();
    }, [baseCurrency])
    

    const handleBaseCurrency = (e) => {
        setBaseCurrency(e.target.value);
    }

    useEffect(() => {
        setInterval(() => {
            getCurrencyInfo()
            .catch(err => {
                console.log(err);
            })
        }, 24 * 60 * 60 * 1000);
    },[])
    

    return (
        <div className='w-2/3 pt-14 flex flex-col space-y-4 font-semibold text-slate-300 bg-slate-800'> 
            <PageHeader text={'Fresh currencies'} />

            <div className='grid grid-cols-2 bg-purple-900 hover:text-slate-50'>
                <div className='flex h-14 justify-center items-center hover:border hover:border-slate-800'>Currency</div>
                <div className='h-full flex justify-center items-center hover:border hover:border-slate-800'>Amount</div>
            </div>

            <div className='grid md:grid-cols-3 grid-cols-2 border-slate-500 bg-slate-900 justify-items-center flex-auto rounded-xl'>
                <div className='w-full h-16 flex flex-wrap justify-center items-center hover:border hover:rounded-md hover:duration-700 text-slate-50'>{baseCurrency}</div>
                <div className={'hidden md:font-mons md:h-full md:flex md:justify-center md:items-center md:text-slate-50'}>{Symbols.symbols[baseCurrency]}</div>
                <div className={'w-full h-full flex justify-center items-center font-mons  text-slate-50'}>{Rates.data.rates[baseCurrency]}</div>
            </div>
            
            {viewedCurrencies.map((currency) => (
                <div key={currency} className='grid md:grid-cols-3 grid-cols-2 border-slate-500 flex-auto rounded-xl font-semibold'>
                    <button 
                        className='w-full h-10 flex flex-wrap justify-center items-center hover:border hover:rounded-md hover:duration-700 text-slate-50'
                        onClick={ e => handleBaseCurrency(e)}
                        value={currency}
                        >
                            {currency}
                    </button>
                    <div className='hidden md:flex md:items-center md:justify-center md:h-10 hover:text-slate-50'>{Symbols.symbols[currency]}</div>
                    <div className='flex items-center justify-center h-10 hover:text-slate-50'>{rates[currency]}</div>
                </div>
            ))}

            <AddViewedCurrency addViewedCurrency={addViewedCurrency} rates={rates} />
            <h2 className='text-sm font-italic'> Last updated {Rates.data.date} </h2>
        </div>
        
    );
};

export  {CurrencyView};