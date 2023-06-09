import React from 'react'
import MainStack from './MainStack'
import AuthStack from './AuthStack'
import { NavigationContainer } from '@react-navigation/native'

const Navigation = () => {
    const user = { name: 'folareen', token: 'lol404' }
    // const user = { token: null }
    return (
        <NavigationContainer >
            {
                user.token ?
                    <MainStack />
                    :
                    <AuthStack />
            }
        </NavigationContainer>
    )
}

export default Navigation