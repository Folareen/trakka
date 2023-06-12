import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    transactionCard: {
        backgroundColor: 'white',
        marginBottom: 20,
        paddingHorizontal: 17.5,
        paddingVertical: 8,
        borderRadius: 25,
        marginHorizontal: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: 5,
        marginVertical: 8
    },
    category: {
        fontSize: 16,
        fontFamily: '500',
        textTransform: 'capitalize'
    },
    amount: {
        fontSize: 16,
        fontFamily: '600'
    },
    expenses: {
        color: '#FD3C4A'
    },
    income: {
        color: '#00A86B'
    },
    description: {
        color: '#91919F',
        fontFamily: '500',
        fontSize: 13
    },
})