import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Style'
import { AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'

const ProfileButton = ({ title }: { title: string }) => {
    return (
        <TouchableOpacity style={[styles.container, title == 'logout' && styles.logout]}>
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