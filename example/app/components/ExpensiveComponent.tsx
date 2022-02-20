import * as React from 'react'; // we need this to make JSX compile
import Text from 'components/Text';
import {View} from 'react-native';
import useCount from 'common/hooks/useCount';
import FocusRender from '../../../lib/index'; // we need this to make JSX compile
type ComponentType = {
  useFocusRender: boolean;
};

const Wrapper = ({isFocused, children}) => (
  <View style={{opacity: isFocused ? 1 : 0.5}}>{children}</View>
);

const ExpensiveComponent: React.FC<ComponentType> = ({useFocusRender}) => {
  const {count} = useCount();
  return useFocusRender ? (
    <FocusRender Wrapper={Wrapper}>
      {!!count && <Text>Count is {count}</Text>}
      {new Array(5000).fill(0).map((v, k) => (
        <Text key={k}>{v}</Text>
      ))}
    </FocusRender>
  ) : (
    <>
      {!!count && <Text>Count is {count}</Text>}
      {new Array(5000).fill(0).map((v, k) => (
        <Text key={k}>{v}</Text>
      ))}
    </>
  );
};

export default ExpensiveComponent;
