import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { styles } from './Style'
import { getDateAndTime } from '../../utils/formatDate'
import formatAmount from '../../utils/formatAmount'

const RecentTransactionCard = ({ amount, type, category, date }: { amount: number, type: string, category: string, date: string }) => {
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
                    &#8358; {formatAmount(amount)}
                </Text>
                <View>
                    <Text style={styles.category}>
                        {category}
                    </Text>
                    <Text style={[styles.category, { fontSize: 12, marginTop: 5 }]}>
                        {getDateAndTime(date)}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default RecentTransactionCard