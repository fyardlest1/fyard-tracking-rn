import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createSwitchNavigator } from '@react-navigation/compat';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext'

// const switchNavigator = createSwitchNavigator({
//   loginFlow: createStackNavigator({
//     Signin: SigninScreen,
//     Signup: SignupScreen
//   }),
//   mainFlow: createBottomTabNavigator({
//     trackListFlow: createStackNavigator({
//       TrackList: TrackListScreen,
//       TrackDetail: TrackDetailScreen
//     }),
//     TrackCreate: TrackCreateScreen,
//     Account: AccountScreen
//   })
// })

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
// const FlowTab = createBottomTabNavigator()

// const TrackListFlow = () => {
//   return (
//     <FlowTab.Navigator>
//       <FlowTab.Screen name="TrackDetail" component={TrackDetailScreen} />
//       <FlowTab.Screen name="User" component={UserScreen} />
//     </FlowTab.Navigator>
//   )
// }

const UserScreen = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="TrackList" component={TrackListScreen} />
        <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
        {/* <Tab.Screen name="TrackDetail" component={TrackDetailScreen} /> */}
      </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Signup" 
            component={SignupScreen} 
            options={{
              title: 'Sign up',
              header: () => null
            }}
          />
          <Stack.Screen 
            name="Signin" 
            component={SigninScreen} 
            options={{
              title: 'Sign in',
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              // animationTypeForReplace: isSignout ? 'pop' : 'push',
            }}
          />
          <Stack.Screen 
            name="UserScreen" 
            component={UserScreen} 
            options={{
              title: 'User Account'
            }}
          />
          <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}
