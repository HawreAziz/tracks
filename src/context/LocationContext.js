import createDataContext from './createDataContext';



const handleTracks = (state, action) => {
    switch(action.type){
        case 'add_current_location':
          return { ...state, currentLocation: action.payload };
        case 'add_location':
          return { ...state, locations: [...state.locations, action.payload] };
        case 'start_recording':
          return { ...state, recording: true };
        case 'stop_recording':
          return { ...state, recording: false };
        case 'change_name':
          return { ...state, name: action.payload };
        default:
          return state;
    }
}


const startRecording = dispatch => {
    return () => {
        dispatch({type: 'start_recording'})
    }
}


const stopRecording = dispatch => {
    return () => {
        dispatch({type: 'stop_recording'});
    }
}


const changeName = () => {
    return (name) => {
        dispatch({ type: 'change_name', payload: name });
    }
}


const addLocation = dispatch => {
    return (location, recording) => {
        dispatch({ type: 'add_current_location', payload: location});
        if(recording){
            dispatch({ type: 'add_location', payload: location});
        }
    }
}

export const {Context, Provider} = createDataContext(
                                                    handleTracks,
                                                    { stopRecording,
                                                      startRecording,
                                                      addLocation
                                                    },
                                                    { recording: false,
                                                      locations: [],
                                                      currentLocation: null,
                                                      name: ''
                                                    });