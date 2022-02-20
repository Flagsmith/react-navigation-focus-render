import * as React from 'react';
import {View, Text, Button} from 'react-native';
import useCount from 'common/hooks/useCount';
import CustomNavbar from 'components/CustomNavbar';
import {ScreenStyles} from "styles/ScreenStyles"; // we need this to make JSX compile

type ComponentType = {};

const Screen2: React.FC<ComponentType> = ({}) => {
  const {setCount, count} = useCount();
  return (
      <View style={ScreenStyles.screen}>
      <CustomNavbar title={'Screen2'} />
      <Button
        onPress={() => setCount((count || 0) + 1)}
        title={`Update Count (${count || 0})`}>
        Tab 1 Screen
      </Button>
    </View>
  );
};

export default Screen2;
