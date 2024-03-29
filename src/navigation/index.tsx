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
import { setAxiosToken } from '../api'
import Toast from 'react-native-root-toast'


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
                    setAxiosToken(token)
                    store.authenticate(user)
                } catch (error: any) {
                    // Toast.show(error.message, { position: Toast.positions.TOP, backgroundColor: 'orange', duration: Toast.durations.SHORT, shadow: true, animation: true, hideOnPress: true })
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