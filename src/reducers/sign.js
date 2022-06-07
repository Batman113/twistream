/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line import/no-anonymous-default-export
const INITIAL = {
    isSignedIn : null,
    userId:null
}
export default (state=INITIAL,action) =>{
    // console.log(action);
    // console.log(state);

    if(action.type === 'SIGN_IN'){
        return {
            ...state,isSignedIn:true,userId:action.payload.userID
        }
    }
    else if(action.type === 'SIGN_OUT'){
        return {
            ...state,isSignedIn:false, userId:action.payload.userID
        }
    }
    return state;
}