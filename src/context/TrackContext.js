import createDataContext from './createDataContext';
import tracker from '../api/track-server/TrackApi';



const handleTrack = 
(state, action) => {
    switch(action.type){
        case 'fetch_tracks':
          return action.payload;
        default:
          return state;
    }
}


const fetchTracks = dispatch => {
    return async () => {
        const response = await tracker.get('/tracks');
        dispatch({ type: 'fetch_tracks', payload: response.data});
    }
}

const createTrack = dispatch => {
    return async (name, locations) => {
        try{
            const response = await tracker.post('/tracks', {name, locations});
        }catch(error){
            console.log(error);
        }
    }
}


export const { Context, Provider } = createDataContext(handleTrack, {createTrack, fetchTracks}, []);