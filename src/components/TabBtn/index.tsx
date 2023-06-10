import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { durationType } from '../../screens/main/Home/type'
import { styles } from './Style'

const index = ({ value, duration, setDuration }: { value: durationType, setDuration: React.Dispatch<durationType>, duration: durationType }) => {
    return (
        <Button style={[styles.btn, value == duration ? styles.active : null]} labelStyle={[styles.text, value == duration ? styles.activeText : null]} onPress={() => {
            setDuration(value)
        }}>
            {value}
        </Button>
    )
}

export default index