import * as React from 'react';
import {useIsFocused} from '@react-navigation/native';

class _RenderOnFocus extends React.Component {
  state = {};

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.isFocused;
  }

  render() {
    return <>{this.props.children}</>;
  }
}

export default function FocusRender({children, Wrapper = null}) {
  const isFocused = useIsFocused();
  if (Wrapper) {
    return (
        <Wrapper isFocused={isFocused}>
          <_RenderOnFocus isFocused={isFocused}>{children}</_RenderOnFocus>
        </Wrapper>
    );
  }
  return <_RenderOnFocus isFocused={isFocused}>{children}</_RenderOnFocus>;
}
