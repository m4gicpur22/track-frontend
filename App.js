import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import accountScreen from './src/screens/accountScreen';
import signinScreen from './src/screens/signinScreen';
import signupScreen from './src/screens/signupScreen';

import trackCreateScreen from './src/screens/trackCreateScreen';
import trackDetailScreen from './src/screens/trackDetailScreen';
import trackListScreen from './src/screens/trackListScreen';

import { Provider as AuthProvider } from "./src/Context/authContext";
import { Provider as LocationProvider } from './src/Context/LocationContext';
import { Provider as TrackProvider } from './src/Context/TrackContext';

import { setNavigator } from './src/navigationRef';

import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

import { FontAwesome } from '@expo/vector-icons';


const tracklistflow = createStackNavigator({
  TrackList: trackListScreen,
  TrackDetail: trackDetailScreen
});

tracklistflow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};

const switchNavigator = createSwitchNavigator({
  ResolveAuthScreen: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup : signupScreen,
    Signin : signinScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: tracklistflow,
    TrackCreate: trackCreateScreen,
    Account: accountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref = { (navigator) => {setNavigator(navigator)} }/>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
}