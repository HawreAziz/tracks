import '../_mockLocations';
import React, { useContext, useCallback } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as locationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';


const CreateTrackScreen = ({ isFocused }) => {
    const { state: { recording } , addLocation } = useContext(locationContext);
    const callback = useCallback(location => {
        addLocation(location, recording);
    }, [recording]);
    const [ errorMessage ] = useLocation(isFocused || recording, callback);
    return (
        <SafeAreaView  forceInset={{ top: 'always' }}>
            <View> 
                <Text h3>Create a track</Text> 
                <Map />
                { errorMessage ? <Text>{errorMessage}</Text> :  null }
                <TrackForm />

            </View>
        </SafeAreaView>
    );
}


export default withNavigationFocus(CreateTrackScreen);