import createDataContext from './createDataContext';



const handleTrack = 
(state, action) => {
    switch(action.type){
        default:
          return state;
    }
}


const createTrack = (dispatch) => {
    return () => {
        console.log('Create Track');
    }
}


export const { Context, Provider } = createDataContext(handleTrack, {createTrack}, {})