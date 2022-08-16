import React, {useEffect, useReducer} from 'react';
import PropTypes from 'prop-types';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

import { InputForm } from './InputForm';
import { converterViewReducer } from '../reducers/ConverterViewReducer';
import { Rates } from '../data/Rates';
import { getCurrencyInfo} from '../data/getRates';
import { initialState } from '../data/Rates';
import { PageHeader } from './PageHeader';





const ConverterView = () => {
    const [state, dispatch] = useReducer(converterViewReducer, initialState);

    useEffect(() => {
        setInterval(()=> {
            getCurrencyInfo()
            .then(() => {
                console.log(Rates.data.rates)
                dispatch({type:'rates', payload: Rates.data.rates});
            })
        },24 * 60 * 60 * 1000)
    }, [])
    
    const format = number => number.toFixed(3)

    const handleConvert = (type) => { 
        switch(type){
            case 'amountFirst': 
                setTimeout(() => {
                    dispatch({type:'amountSecond', payload: format(state.amountFirst * 
                        state.rates[state.currencySecond] / state.rates[state.currencyFirst])});
                },100);
                break;

            case 'amountSecond':
                setTimeout(() => {
                    dispatch({type: 'amountFirst', payload: format(state.amountSecond * 
                        state.rates[state.currencyFirst] / state.rates[state.currencySecond])});
                },100);
                break;

            default:
                throw new Error('Underfind type');
        }
    }


    const handleOnAmountChange = (e, typeName) => {
        // const regex = "([0-9]([.][0-9]*)?|[.][0-9])";
        // if(e.target.value.match(regex)) {
        dispatch({type: typeName, payload: e.target.value});
        // }
    }

    useEffect (() => {
        handleConvert('amountFirst');
    }, [state.amountFirst, state.currencyFirst, state.currencySecond]);


    const handleOnClickChangeCircle = () => {
        const temp = {
            currency: state.currencySecond,
            amount: state.amountSecond,
        };
        dispatch({type: 'currencySecond', payload: state.currencyFirst});
        dispatch({type: 'currencyFirst', payload: temp.currency});
        dispatch({type: 'amountFirst', payload: temp.amount});
    }


    return (
        <div className='w-full h-screen pt-20 bg-slate-800'>
            <PageHeader text={'Converter'} />

            <div className='w-full 2xl:justify-center 2xl:flex 2xl:flex-row 2xl:space-x-20 grid justify-items-center'> 
                <InputForm 
                    text="From" 
                    currencies={Object.keys(state.rates)} 
                    amount={state.amountFirst}
                    currency={state.currencyFirst}
                    onAmountChange={(e) => handleOnAmountChange(e, 'amountFirst')}
                    onCurrencyChange={(e) => dispatch({type: 'currencyFirst', payload: e.target.value})}
                    
                />

                <ChangeCircleIcon 
                    className='mt-7 text-slate-400 hover:bg-slate-300 rounded-full hover:text-slate-800 hover:duration-1000'
                    fontSize='large'
                    onClick={handleOnClickChangeCircle}
                />

                <InputForm 
                    text="Into" 
                    currencies={Object.keys(state.rates)} 
                    amount={state.amountSecond} 
                    currency={state.currencySecond} 
                    onAmountChange={(e) => handleOnAmountChange(e, 'amountSecond')}
                    onCurrencyChange={(e) => dispatch({type: 'currencySecond', payload: e.target.value})}
                />                
            </div>
        </div>
        
    );
};


ConverterView.protoTypes = {
    amountFirst: PropTypes.number.isRequired || null,
    amountSecond: PropTypes.number.isRequired || null,
    currencyFirst: PropTypes.string.isRequired,
    currencySecond: PropTypes.string.isRequired,
    setAmountFirst: PropTypes.func,
    setAmountSecond: PropTypes.func,
    setterFunc: PropTypes.func,
    typeName: PropTypes.string,
    

}


export  {ConverterView};