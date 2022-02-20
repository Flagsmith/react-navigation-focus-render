import * as React from 'react';
import {View, Text, Button} from 'react-native';
import useCount from 'common/hooks/useCount'; // we need this to make JSX compile

type ComponentType = {};

const Tab1Screen: React.FC<ComponentType> = ({}) => {
  const {setCount, count} = useCount();
  return (
    <View>
      <Button
        onPress={() => setCount((count || 0) + 1)}
        title={`Update Count (${count || 0})`}>
        Tab 1 Screen
      </Button>
    </View>
  );
};

export default Tab1Screen;
