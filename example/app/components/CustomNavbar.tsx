import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  TextStyle,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Text from 'components/Text';
type Props = {
  title: string;
};

const CustomNavbar: React.FC<Props> = ({title}) => {
  const navigation = useNavigation();
  // @ts-ignore
  const pop = () => navigation.pop();
  //@ts-ignore
  return (
    <View style={styles.navContainer}>
      {navigation.canGoBack() && (
        <View style={styles.backContainer}>
          <TouchableOpacity style={styles.buttonContainer} onPress={pop}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  backContainer: {
    justifyContent: 'center',
    position: 'absolute',
    left: 10,
    top: 20,
    bottom: 0,
  },
  backText: {
    color: 'rgb(0,122,255)',
  },
  navContainer: {
    flexDirection: 'row',
    position: 'relative',
    paddingTop: 64,
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 64,
    backgroundColor: 'white',
  },
  titleContainer: {
    height: 44,
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
  buttonContainer: {
    width: 50,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
  },
});

export default CustomNavbar;
