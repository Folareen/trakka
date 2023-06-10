import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { styles } from './Style'

const RecentTransactionCard = ({ amount, type, category }: { amount: number, type: string, category: string }) => {
    return (
        <View style={styles.container}>
            {
                type == 'expenses' &&
                <View style={styles.expenses} >
                    <Feather name="arrow-up" size={24} color="white" style={styles.expensesIcon} />
                </View>
            }
            {
                type == 'income' &&
                <View style={styles.income} >
                    <Feather name="arrow-down" size={24} color="white" style={styles.incomeIcon} />
                </View>
            }

            <View style={styles.amtAndCgy}>
                <Text style={styles.amount}>
                    &#8358; {amount}
                </Text>
                <Text style={styles.category}>
                    {category}
                </Text>
            </View>
        </View>
    )
}

export default RecentTransactionCard