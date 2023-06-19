import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { RecentTransType } from '../../screens/main/Home/type'
import { styles } from './Style'

const index = ({ value, recentTransType, setRecentTransType }: { value: RecentTransType, setRecentTransType: React.Dispatch<RecentTransType>, recentTransType: RecentTransType }) => {
    return (
        <Button style={[styles.btn, value == recentTransType ? styles.active : null]} labelStyle={[styles.text, value == recentTransType ? styles.activeText : null]} onPress={() => {
            setRecentTransType(value)
        }}>
            {value}
        </Button>
    )
}

export default index