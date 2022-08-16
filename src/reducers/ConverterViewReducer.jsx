
function converterViewReducer (state, action) {
    switch(action.type){
        case 'rates':
            return {...state, rates: action.payload};

        case 'currencyFirst':
            return {...state, currencyFirst: action.payload};

        case 'currencySecond':
            return {...state, currencySecond: action.payload};

        case 'amountFirst':
            return {...state, amountFirst: action.payload};

        case 'amountSecond':
            return {...state, amountSecond: action.payload};
        
        default:
            throw new Error(`Unknown action type: ${action.type}`);

    }
}

export {converterViewReducer};