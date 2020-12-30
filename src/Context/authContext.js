import createDataContext from './createDatacontext';
import trackerApi from '../Api/tracker';
import AsyncStorage from '@react-native-community/async-storage'

import { navigate } from '../navigationRef';


const authReducer = (state, action) => {
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'sign_up':
            return {errorMessage: '', token: action.payload}
        default:
            return state;
    }
};

const signup = (dispatch) => async ({ email, password }) => {
        try {
            const res = await trackerApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', res.data.token);
            dispatch({ type: 'sign_up', payload: res.data.token});
            navigate('TrackList');
            console.log(response.data);
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Error with signup'})
        }
};

const signin = (dispatch) => {
    return ({email, password}) => {
    };
};

const signout = (dispatch) => {
    return () => {
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    {signup, signin, signup},
    { token: null, errorMessage: ''}
);