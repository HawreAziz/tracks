import React from 'react';
import { AsyncStorage } from 'react-native';
import trackServer from '../api/track-server/TrackApi';
import createTrackContext from './createTrackContext';


const handleTracks = (state, action) => {
    switch(action.type){
        case 'signup':
          return {...state, token: action.payload, errorMessage: ''};
        case 'add_error':
          return {...state, errorMessage: action.payload};
        default:
          return;
    }
} 

const signup = dispatch => {
    return async ({email, password}) => {
        try{
            const response = await trackServer.post('/signup', {email, password});
            console.log(response.data);
            await AsyncStorage.setItem('token', response.data);
            dispatch({type: 'signup', payload: response.data});
            const token = await AsyncStorage.getItem('token');
        } catch(error){
            console.log(error.message);
            dispatch({type:'add_error', payload: 'Could not signup'});
        }
    }
}

const signin = dispatch => {
    return async ({email, password}) => {
        try{
            console.log(`Login with ${email} ${password}`);
            const token = await AsyncStorage.getItem('token');
            const response = await trackServer.post('/signin', {email, password});
            await AsyncStorage.setItem('token', reponse.data);
            console.log(response.data);
            // update state
        }catch(error){
            console.log(error);
            // update state
        }
    }
}

export const { Context, Provider } = createTrackContext(handleTracks, 
                                                    {signup, signin}, 
                                                    {token: null, 
                                                    errorMessage: ''});