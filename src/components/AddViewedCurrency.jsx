import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Symbols } from '../data/Symbols';


const AddViewedCurrency = (props) => {
    const [selectorActive, setSelectorActive] = useState(false);

    const handleSelectorToggle = () => {
        setSelectorActive(prevState => !prevState);
    }

    return (
        <div className='flex flex-row space-x-5 w-full pl-5 items-center justify-start'>

                <button
                    className='bg-slate-900 rounded-md p-2'
                    onClick={handleSelectorToggle}
                >
                    Add currency 
                </button>

                {!!!selectorActive && <AddIcon
                    onClick={handleSelectorToggle}
                />}

                {selectorActive && <select className='text-slate-900 w-48 rounded-md p-2'>   
                    {Object.entries(props.rates).map((currency, index)=> (
                        <option 
                            key={currency[0]}
                            onClick={e => props.addViewedCurrency(e)}
                        > 
                        {currency[0]}- {Symbols.symbols[currency[0]]}
                        </option>
                    ))}
                </select>}

            </div>
    );
};

export {AddViewedCurrency};