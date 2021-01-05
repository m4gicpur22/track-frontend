import createDataContext from './createDatacontext';
import trackerApi from '../Api/tracker';
import AsyncStorage from '@react-native-community/async-storage';

const trackReducer = (state, action) => {

    switch (action.type){
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    }
};

const fetchTracks = (dispatch) => async () => {
    const res = await trackerApi.get('/tracks');
    dispatch({type: 'fetch_tracks', payload: res.data});
};

const createTrack = (dispatch) => async (name, locations) => {
    await trackerApi.post('/tracks', {name, locations});
};

export const {Provider, Context } = createDataContext(
    trackReducer,
    {fetchTracks, createTrack},
    []
);
