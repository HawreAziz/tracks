import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';


const TrackDetailScreen = ({ navigation }) => {
    const {state} = useContext(TrackContext);
    const _id = navigation.getParam('_id');
    const track = state.find(t => t._id === _id);
    return (
        <View> 
             <Text>{track.name}</Text> 
             <MapView
               style={styles.map} 
               initialRegion={{
                   ...track.locations[0].coords,
                   latitudeDelta: 0.01,
                   longitudeDelta: 0.01
               }}>
              <Polyline coordinates={track.locations.map(loc => loc.coords)} />
             </MapView>
        </View>
    );
}


const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default TrackDetailScreen;