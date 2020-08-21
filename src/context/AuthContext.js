import React from 'react';
import { AsyncStorage } from 'react-native';
import trackServer from '../api/track-server/TrackApi';
import createTrackContext from './createDataContext';
import { navigate } from '../../navigationRef';

const handleTracks = (state, action) => {
    switch(action.type){
        case 'signin':
          return {...state, token: action.payload, errorMessage: ''};
        case 'signout':
          return { token: null, errorMessage: '' };
        case 'add_error':
          return {...state, errorMessage: action.payload};
        case 'clear_error_message':
          return {...state, errorMessage: ''};
        default:
          return;
    }
} 


const clearErrorMessage = dispatch => {
    return () => {
        dispatch({type: 'clear_error_message'});
    }
}


const tryLocalSignin = dispatch => {
    return async () => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            dispatch({type: 'signin', payload: token});
            navigate('TrackList');
        }else{
            navigate('Login');
        }
    }
}

const signup = dispatch => {
    return async ({email, password}) => {
        try{
            const response = await trackServer.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token });
            navigate("TrackList");
        } catch(error){
            dispatch({type:'add_error', payload: 'Could not signup'});
        }
    }
}

const signin = dispatch => {
    return async ({email, password}) => {
        try{
            const response = await trackServer.post('/signin', {email, password});
            console.log(response.data.token);
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});
            navigate("TrackList");
        }catch(error){
            console.log(error);
            dispatch({type: 'add_error', payload: 'Something went wrong'});
        }
    }
}


const signout = dispatch => {
    return async () => {
        await AsyncStorage.removeItem('token');
        dispatch({type: 'signout'});
        navigate('Login');
    }
}

export const { Context, Provider } = createTrackContext(handleTracks, 
                                                    { signup,
                                                      signin,
                                                      clearErrorMessage,
                                                      tryLocalSignin,
                                                      signout 
                                                    }, 
                                                    {token: null, 
                                                    errorMessage: ''});