import { View, Text, SafeAreaView, Platform, StatusBar } from 'react-native'
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
    <Tab.Screen name='home' component={Home} options={{ headerShown: false }} />
    <Tab.Screen name='transactions' component={Transactions} options={{ headerShown: false }} />
    <Tab.Screen name='statistics' component={Statistics} options={{ headerShown: false }} />
    <Tab.Screen name='profile' component={Profile} options={{ headerShown: false }} />
  </Tab.Navigator>
)

const MainStack = () => {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS == 'ios' ? 0 : StatusBar.currentHeight, flex: 1, }}>
      <Stack.Navigator>
        <Stack.Screen component={TabsStack} name='tabs-stack' options={{ headerShown: false }} />
        <Stack.Screen name='add-transaction' component={AddTransaction} options={{ headerShown: false }} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}

export default MainStack