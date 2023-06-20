import { View, Text, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/main/Home'
import Transactions from '../screens/main/Transactions'
import Statistics from '../screens/main/Statistics'
import Profile from '../screens/main/Profile'
import AddTransaction from '../screens/main/AddTransaction'
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const MainStack = () => {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS == 'ios' ? 0 : StatusBar.currentHeight, flex: 1, }}>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#7F3DFF', tabBarInactiveTintColor: '#858585',
        tabBarLabelStyle: { fontSize: 10, fontFamily: '500', textTransform: 'capitalize' },
        tabBarStyle: { padding: 5, height: 60 }, tabBarItemStyle: { height: 50 }
      }}>
        <Tab.Screen name='home' component={Home} options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="home-filled" size={30} color={color} />
          , headerShown: false
        }} />
        <Tab.Screen name='transactions' component={Transactions} options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="swap-horizontal-bold" size={30} color={color} />
          , headerShown: false
        }} />
        <Tab.Screen name='add-transaction' component={AddTransaction} options={{
          tabBarIcon: () => <AntDesign name="pluscircle" size={52} color="#7F3DFF" />
          , headerShown: false, tabBarLabelStyle: { display: 'none' }, tabBarIconStyle: { marginTop: -60 },
        }} />
        <Tab.Screen name='statistics' component={Statistics} options={{
          tabBarIcon: ({ color }) => <AntDesign name="piechart" size={30} color={color} />
          , headerShown: false
        }} />
        <Tab.Screen name='profile' component={Profile} options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={30} color={color} />
          , headerShown: false
        }} />
      </Tab.Navigator>
    </SafeAreaView>
  )
}

export default MainStack