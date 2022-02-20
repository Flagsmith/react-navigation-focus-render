import * as React from 'react';
import {View, Button} from 'react-native';
import {useState} from 'react';
import {ScreenStyles} from 'styles/ScreenStyles';
import ExpensiveComponent from '../ExpensiveComponent';
import {useNavigation} from '@react-navigation/core'; // we need this to make JSX compile
type ComponentType = {};

const HomeScreen: React.FC<ComponentType> = ({}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const navigation = useNavigation();
  return (
    <View style={ScreenStyles.screen}>
      <Button
        title={`Turn FocusRender ${isActive ? 'Off' : 'On'}`}
        onPress={() => setIsActive(!isActive)}
      />
      <Button
        title={'Go to new Screen'}
        onPress={() => {
            // @ts-ignore
            navigation.navigate('Tabs')
        }}
      />
      <ExpensiveComponent useFocusRender={isActive} />
    </View>
  );
};

export default HomeScreen;
