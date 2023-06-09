import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/auth/Login'
import Signup from '../screens/auth/Signup'
import Landing from '../screens/auth/Landing'

const Stack = createStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen component={Landing} name='landing' />
            <Stack.Screen component={Login} name='login' />
            <Stack.Screen component={Signup} name='signup' />
        </Stack.Navigator>
    )
}

export default AuthStack