import { View, Text } from 'react-native'
import React from 'react'
import { Feather, FontAwesome5 } from '@expo/vector-icons'
import { styles } from './Style'
import formatAmount from '../../utils/formatAmount'

type Props = {
    amount: number,
    type: 'income' | 'expenses'
}

const index = ({ amount, type }: Props) => {
    return (
        <View style={[styles.container, styles[type]]}>
            {
                type == 'income' &&
                <View style={styles.icons}>
                    <Feather name="arrow-down" size={12} color="#00A86B" style={styles.icon} />
                    <FontAwesome5 name="money-bill" size={16} color="#00A86B" style={styles.icon} />
                </View>
            }
            {
                type == 'expenses' &&
                <View style={styles.icons}>
                    <View >
                        <Feather name="arrow-up" size={12} color="#FD3C4A" style={styles.icon} />
                    </View>
                    <View >
                        <FontAwesome5 name="money-bill" size={16} color="#FD3C4A" style={styles.icon} />
                    </View>
                </View>
            }

            <View style={styles.content}>
                <Text style={styles.type}>
                    {type}
                </Text>
                <Text style={styles.amount}>
                    &#8358; {formatAmount(amount)}
                </Text>
            </View>
        </View>
    )
}

export default index