import React, { useState, useEffect } from 'react'
import MainStack from './MainStack'
import AuthStack from './AuthStack'
import { NavigationContainer } from '@react-navigation/native'
import useAuthStore from '../stores/useAuthStore'
import styles from '../screens/auth/Style'
import { ActivityIndicator } from 'react-native'
import { Modal, Portal } from 'react-native-paper'
import AsyncStorage from "@react-native-async-storage/async-storage"
import jwtDecode from "jwt-decode"


const Navigation = () => {
    const store = useAuthStore()
    const [authenticating, setAuthenticating] = useState(true)


    useEffect(() => {
        (
            async () => {
                try {
                    setAuthenticating(true)
                    const token = await AsyncStorage.getItem('token') as string
                    const user = await jwtDecode(token)
                    store.authenticate(user)
                } catch (error: any) {
                    console.log(error)
                } finally {
                    setAuthenticating(false)
                }
            }
        )()
    }, [])


    if (authenticating) {
        return (<Portal >
            <Modal visible={authenticating} dismissable={false} style={styles.overlayContainer} contentContainerStyle={styles.overlayInner}>
                <ActivityIndicator size={'large'} color='#7F3DFF' />
            </Modal>
        </Portal>
        )
    }



    return (
        <NavigationContainer >
            {
                store.user ?
                    <MainStack />
                    :
                    <AuthStack />
            }
        </NavigationContainer>
    )
}

export default Navigation