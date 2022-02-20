/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigator from './app/components/navigators/AppNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
