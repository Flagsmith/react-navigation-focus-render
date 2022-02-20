import * as React from 'react';
import {View, Button} from 'react-native';
import {useState} from 'react';
import {ScreenStyles} from 'styles/ScreenStyles';
import ExpensiveComponent from '../ExpensiveComponent';
import {useNavigation} from '@react-navigation/core';
import CustomNavbar from 'components/CustomNavbar'; // we need this to make JSX compile
type ComponentType = {};

const HomeScreen: React.FC<ComponentType> = ({}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const navigation = useNavigation();
  return (
    <View style={ScreenStyles.screen}>
      <CustomNavbar title={'HomeScreen'} />
      <Button
        title={`Turn FocusRender ${isActive ? 'Off' : 'On'}`}
        onPress={() => setIsActive(!isActive)}
      />
      <Button
        title={'Go to new Screen'}
        onPress={() => {
          // @ts-ignore
          navigation.navigate('Screen2');
        }}
      />
      <ExpensiveComponent useFocusRender={isActive} />
    </View>
  );
};

export default HomeScreen;
