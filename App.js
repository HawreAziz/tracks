import React from 'react';
import { View, Text } from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'; 

import AccountScreen from './src/screens/AccountScreen';
import CreateTrackScreen from './src/screens/CreateTrackScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import { Provider } from './src/context/TrackContext';



const appNavigation = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Login: LoginScreen,
    Signup: SignupScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackDescp: createStackNavigator({
      TrackList: TrackDetailScreen,
      TrackDetail: TrackDetailScreen
    }),
    CreateTrack: CreateTrackScreen,
    Account: AccountScreen,
  })
});

const App =  createAppContainer(appNavigation);

export default() => {
  return (
    <Provider>
      <App />
    </Provider>
  )};