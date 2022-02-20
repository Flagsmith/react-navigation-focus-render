import * as React from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from 'screens/HomeScreen';
import {Provider} from 'react-redux';
import _store from 'common/store';
import Screen2 from "screens/Screen2";

const store = _store();
enableScreens();
const Stack = createNativeStackNavigator();

const AppNavigator = function () {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

import performance from 'react-native-performance-monitor/provider';
export default performance(AppNavigator);
