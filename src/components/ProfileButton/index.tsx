import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Style'
import { AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setAxiosToken } from '../../api'
import Toast from 'react-native-root-toast'
import useAuthStore from '../../stores/useAuthStore'

const ProfileButton = ({ title }: { title: string }) => {
    const {authenticate} = useAuthStore()
    return (
        <TouchableOpacity style={[styles.container, title == 'logout' && styles.logout]} onPress={async () => {
            try {
                if (title == 'logout') {
                    await AsyncStorage.removeItem('token')
                    setAxiosToken(null)
                    authenticate({user: null})
                    Toast.show('Logged out!', { position: 60, backgroundColor: 'orange', duration: Toast.durations.SHORT, shadow: true, animation: true, hideOnPress: true })
                } else {
                    Toast.show('Coming soon...', { position: Toast.positions.BOTTOM, backgroundColor: 'orange', duration: Toast.durations.SHORT, shadow: true, animation: true, hideOnPress: true })
                }

            } catch (error: any) {
                Toast.show(error.message, { position: 60, backgroundColor: 'red', duration: Toast.durations.SHORT, shadow: true, animation: true, hideOnPress: true })
            }
        }}>
            <View style={[styles.icon, title == 'logout' && styles.logoutIcon]}>
                {
                    title == 'account' ?
                        <Entypo name="wallet" size={24} color="#7f3dff" />
                        :
                        title == 'settings' ?
                            <Ionicons name="ios-settings" size={24} color="#7f3dff" />
                            :
                            title == 'export data' ?
                                <AntDesign name="upload" size={24} color="#7f3dff" />
                                :
                                title == 'logout' ?
                                    <MaterialIcons name="logout" size={24} color="#FD3C4A" />
                                    :
                                    null
                }

            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default ProfileButton