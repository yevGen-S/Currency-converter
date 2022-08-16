import { Rates } from './Rates';
import axios from 'axios';

export const exchangeApiParams = {
    url: "https://api.apilayer.com/exchangerates_data/",
    request: "latest",
    base: "RUB",
    apikey: "WfwLyxZzpnHERtxW0POKGvOGDhHNfgfm"
}

export const getCurrencyInfo = async () => {
    await axios.get(exchangeApiParams.url + exchangeApiParams.request + 
    `?base=${exchangeApiParams.base}&apikey=${exchangeApiParams.apikey}`)
    .then((response) => {
        Rates.responseData = response.data;
    })
    .catch((error) => {
        console.log(error);
    });
}