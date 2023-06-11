import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './Style'
import { AntDesign } from '@expo/vector-icons'

const Transactions = () => {
    return (
        <View>

            <View style={styles.header}>
                <AntDesign name="arrowleft" size={24} color="black" />
                <Text style={styles.title}>
                    Transactions
                </Text>
            </View>

        </View>
    )
}

export default Transactions