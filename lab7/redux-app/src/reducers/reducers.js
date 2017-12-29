import {combineReducers} from 'redux'
import{
    DATA_LOADED,
    DATA_LOADING,
    CHANGE
} from '../Actions/action';

import{
    GENERAL_FRAME,
    EDUCATION_FRAME,
    CONTACTS_FRAME
} from '../consts';

const defLoadState={
    data: {},
    status : "empty",
};

const defTablState = {
    [GENERAL_FRAME]:true,
    [EDUCATION_FRAME]:true,
    [CONTACTS_FRAME]:true,
};

function loadReducer(state = defLoadState, action){
    switch(action.type){
        case DATA_LOADING:
            return{...state, status:"loading"};
        case DATA_LOADED:
            return{...state, data:action.data, status:"loaded"};
        default:
            return state;
    }
}

function tabsReducer(state=defTablState, action){
    switch(action.type){
        case CHANGE:
            return{...state, [action.frame]: !action.value};
        default:
            return state;
    }
}

const gitViev=combineReducers({
    loadReducer,
    tabsReducer
});

export default gitViev