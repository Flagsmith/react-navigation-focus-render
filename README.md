[![react-navigation-focus-render](https://github.com/Flagsmith/flagsmith/raw/main/static-files/hero.png)](https://www.flagsmith.com/)

# react-navigation-focus-render

Screens within a stack or in tabs will still render when any global state(Redux/Context etc) is updated. This component lets you avoid these renders when the screens are inactive. 


Read a more in depth article about this [here](https://dev.to/kylessg/improving-your-react-native-application-performance-with-react-navigation-focus-render-2hih)



# Installation

``
npm i react-navigation-focus-render --save
``

# Usage

```
import FocusRender from 'react-navigation-focus-render'

const ExpensiveComponent = () => {
   const {count} = useCount(); // something that hooks into changing state
   
   return (
     <FocusRender>
       ... Components
     </FocusRender>
   ) 
}
```

# Advanced usage

You may wish to add a wrapper component that displays differently whilst the inactive component hydrates its state when the screen becomes active.

You can specify a Wrapper component that takes isFocused as a property.

```
import FocusRender from 'react-navigation-focus-render'

const Wrapper = ({isFocused, children}) => (
  <View style={{opacity: isFocused ? 1 : 0.5}}>{children}</View>
);

const ExpensiveComponent = () => {
   const {count} = useCount(); // something that hooks into changing state
   
   return (
     <FocusRender Wrapper={Wrapper}>
       ... Components
     </FocusRender>
   ) 
}
```

# Example

This repository includes an [example project](/example) that demonstrates this working in a simple way.

[HomeScreen](./example/app/components/screens/HomeScreen.tsx): 

- Contains an expensive component that renders 5000 text elements and is connected to redux state "count"
- You can toggle between rendering the component via FocusRender or just by itself

[Screen2](./example/app/components/screens/Screen2.tsx):

- Contains a screen with a button that updates state "count"


Given this simple example, the difference in performance when updating state can be measured using [https://github.com/Flagsmith/react-native-performance-monitor](react-native-performance-monitor).


![img.png](img.png)

Of course, this is quite an extreme example but given an active stack of many tabs / screens this could easily add up if you have complex components.
