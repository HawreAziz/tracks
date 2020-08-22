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
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { setNavigator } from "./navigationRef";
import { FontAwesome } from '@expo/vector-icons';


const trackListFlow = createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    });

trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name='th-list' size={20} />
}

const appNavigation = createSwitchNavigator({
  ResolveAuthScreen: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Login: LoginScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    CreateTrack: CreateTrackScreen,
    Account: AccountScreen,
  })
});

const App =  createAppContainer(appNavigation);

export default() => {
  return (
    <TrackProvider>
    <LocationProvider>
    <AuthProvider>
      <App ref={(navigator) => setNavigator(navigator)} />
    </AuthProvider>
    </LocationProvider>
    </TrackProvider>
  )};