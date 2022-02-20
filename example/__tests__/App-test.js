/**
 * @format
 */

import 'react-native';
import React from 'react';
import AppNavigator from '../app/components/navigators/AppNavigator';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<AppNavigator />);
});
