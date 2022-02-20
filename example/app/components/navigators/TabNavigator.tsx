import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1Screen from 'screens/Tab1Screen';
import Tab2Screen from 'screens/Tab2Screen';

const Tab = createBottomTabNavigator();

type ComponentType = {};

const TheComponent: React.FC<ComponentType> = ({}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{headerShown: false}}
        name="Tab1"
        component={Tab1Screen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Tab2"
        component={Tab2Screen}
      />
    </Tab.Navigator>
  );
};

export default TheComponent;
