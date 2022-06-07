
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import sign from './sign';
import streamReducer from './streamReducer';
export default combineReducers({
    signState:sign,
    form:formReducer,
    streams:streamReducer
});