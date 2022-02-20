import * as React from 'react';
import {View, Text} from 'react-native'; // we need this to make JSX compile

type ComponentType = {};

const Tab2Screen: React.FC<ComponentType> = ({}) => {
  return (
    <View>
      <Text>Tab 1 Screen</Text>
    </View>
  );
};

export default Tab2Screen;
