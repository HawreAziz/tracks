import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import { navigate } from '../../navigationRef';



const TrackListScreen = () => {
    const { state, fetchTracks } = useContext(TrackContext);
    console.log(state)

    const seperator = () => {
        return <View style={{
            height: 1,
            width: "86%",
            backgroundColor: '#CED0CE',
            marginLeft: 14
        }} />
    }

    return (
        <View> 
            <NavigationEvents onWillFocus={fetchTracks} />
            <FlatList 
              data={state} 
              keyExtractor={ item => item._id}
              ItemSeparatorComponent={seperator}
              renderItem={({ item }) => {
                  return <TouchableOpacity onPress={ () => {
                      navigate('TrackDetail', { _id : item._id });
                  }
                  }>
                      <ListItem 
                        chevron
                        title={item.name}
                      />
                  </TouchableOpacity>
            }} />
        </View>
    );
}


TrackListScreen.navigationOptions = {
    headerTitleAlign: 'center',
    title: 'Tracks'
}

export default TrackListScreen;