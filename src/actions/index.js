import axios from 'axios';
import history from '../history';
export const signOut = () => {
    return {
        type:'SIGN_OUT',
        payload:{
            userID:null
        }
    }
};

export const signIn = (id) => {
    return {
        type:'SIGN_IN',
        payload:{
            userID:id
        }
    }
}

export const createStream = (values) => {
    return async (dispatch, getState) => {
        // const response = await axios.get('http://localhost:3001');
        // console.log(response);
        const {userId} = getState().signState;
        const response = await axios.post('http://localhost:3001/streams',{...values,userId});
        dispatch({type:'CREATE_STREAM',payload:response.data});
        // console.log(response);
        history.push('/');
    };
}

export const deleteStream = (id) => {
    return async (dispatch) => {
        await axios.delete(`http://localhost:3001/streams/${id}`);
        dispatch({type:'DELETE_STREAM',payload:id});
        history.push('/');
    }
}

export const getStream = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/streams/${id}`);
        dispatch({type:'GET_STREAM',payload:response.data});
    }
}
export const getStreams = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/streams`);
        dispatch({type:'GET_STREAMS',payload:response.data});
    }
};
export const updateStream = (id,formValues) => {
    return async (dispatch) => {
        const response = await axios.patch(`http://localhost:3001/streams/${id}`,formValues);
        dispatch({type:'UPDATE_STREAM',payload:response.data});
        history.push('/');
    }
}