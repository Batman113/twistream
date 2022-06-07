/* eslint-disable import/no-anonymous-default-export */

import _ from "lodash";

export default (state={},action) => {
    switch(action.type){
        case 'DELETE_STREAM':return _.omit(state,action.payload)
            // return {...state}
        default :
            return state 
    }
}