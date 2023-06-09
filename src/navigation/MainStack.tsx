import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/main/Home'
import Transactions from '../screens/main/Transactions'
import Statistics from '../screens/main/Statistics'
import Profile from '../screens/main/Profile'
import AddTransaction from '../screens/main/AddTransaction'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TabsStack = () => (
  <Tab.Navigator>
    <Tab.Screen name='home' component={Home} />
    <Tab.Screen name='transactions' component={Transactions} />
    <Tab.Screen name='statistics' component={Statistics} />
    <Tab.Screen name='profile' component={Profile} />
  </Tab.Navigator>
)

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={TabsStack} name='tabs-stack' options={{ headerShown: false }} />
      <Stack.Screen name='add-transaction' component={AddTransaction} />
    </Stack.Navigator>
  )
}

export default MainStack