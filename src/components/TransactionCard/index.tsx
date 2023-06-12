import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import { styles } from './Style'

type Props = {
    category: string,
    description: string,
    amount: number,
    transactionType: string,
    date: string
}

const TransactionCard = ({ category, description, amount, transactionType, date }: Props) => {
    return (
        <View style={styles.transactionCard}>
            <View style={styles.row}>
                <Text style={styles.category}>
                    {category}
                </Text>
                <Text style={[styles.amount, styles[transactionType]]}>
                    {transactionType == 'income' ? '+' : '-'} {amount}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.description}>
                    {description}
                </Text>
                <Text style={styles.description}>
                    {date}
                </Text>
            </View>

        </View>
    )
}

export default TransactionCard