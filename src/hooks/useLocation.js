import { useState, useEffect } from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';



export default ( shouldTrack, callback ) => {
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        let subscriber;
        const startWatchingPosition = async () => {
            try{
                const { granted } = await requestPermissionsAsync();
                if(!granted){
                    throw new Error('Permission to access location was denied.');
                }
                console.log('startWatchingPosition');
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, location => {
                    console.log(location);
                    callback();
                });
            }catch(error){
                setErrorMessage(error);
            }
        }

        if(shouldTrack){
            startWatchingPosition();
        }else{
            if(subscriber){
                subscriber.remove();
            }
            subscriber = null;
        }
        return () => {
            if(subscriber){
                subscriber.remove();
            }
        };
    }, [shouldTrack, callback]);

    return [errorMessage];
}