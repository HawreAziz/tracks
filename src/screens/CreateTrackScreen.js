import '../_mockLocations';
import React, { useContext, useCallback } from 'react';
import { View } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as locationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';


const CreateTrackScreen = ({ isFocused }) => {
    const { state: { recording } , addLocation } = useContext(locationContext);
    const callback = useCallback(location => {
        addLocation(location, recording);
    }, [recording]);
    const [ errorMessage ] = useLocation(isFocused || recording, callback);
    return (
        <SafeAreaView  forceInset={{ top: 'always' }}>
            <View> 
                <Map />
                { errorMessage ? <Text>{errorMessage}</Text> :  null }
                <TrackForm />

            </View>
        </SafeAreaView>
    );
}

CreateTrackScreen.navigationOptions = {
    title: 'Add',
    tabBarIcon: <FontAwesome name='plus' size={20} />
}


export default withNavigationFocus(CreateTrackScreen);