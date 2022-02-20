import React from 'react';

export interface MyComponentProps {
    Wrapper?: React.FC<{ isFocused:boolean }>

}

const ExpensiveComponent: React.FC<MyComponentProps>
export default ExpensiveComponent;
