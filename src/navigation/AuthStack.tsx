import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/auth/Login'
import Signup from '../screens/auth/Signup'
import Landing from '../screens/auth/Landing'
import ForgotPassword from '../screens/auth/ForgotPassword'
import ResetPassword from '../screens/auth/ResetPassword'

const Stack = createStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen component={Landing} name='landing' options={{ headerShown: false }} />
            <Stack.Screen component={Login} name='login' options={{ headerShown: false }} />
            <Stack.Screen component={Signup} name='signup' options={{ headerShown: false }} />
            <Stack.Screen component={ForgotPassword} name='forgot-password' options={{ headerShown: false }} />
            <Stack.Screen component={ResetPassword} name='reset-password' options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AuthStack