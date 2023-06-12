import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './Style'
import { AntDesign, Feather } from '@expo/vector-icons'
import ProfileButton from '../../../components/ProfileButton'

const Profile = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>
                    Profile
                </Text>
            </View>

            <View style={styles.details}>
                <Image source={require('../../../assets/images/avatar.png')} style={styles.avatar} />
                <Text style={styles.name}>
                    Vishnu P.V
                </Text>
                <Feather name="edit-2" size={24} color="black" />
            </View>

            <View style={styles.buttons}>

                {
                    ['account', 'settings', 'export data', 'logout'].map((title) => (
                        <ProfileButton title={title} />
                    ))
                }

            </View>

        </View>
    )
}

export default Profile