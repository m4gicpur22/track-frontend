import React from 'react';

import { 
  StyleSheet, 
  Text, 
  View,
} from 'react-native';

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

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup : signupScreen,
    Signin : signinScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: trackListScreen,
      TrackDetail: trackDetailScreen
    }),
    TrackCreate: trackCreateScreen,
    Account: accountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}