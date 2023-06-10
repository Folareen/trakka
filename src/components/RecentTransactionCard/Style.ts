import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D9D9D9',
        marginBottom: 20,
        borderRadius: 5,
        flexDirection: 'row',
        padding: 10,
        columnGap: 14
    },
    expenses: {
        backgroundColor: '#FD3C4A',
        borderRadius: 20,
        padding: 8
    },
    expensesIcon: {

    },
    income: {
        backgroundColor: '#00A86B',
        borderRadius: 20,
        padding: 8
    },
    incomeIcon: {

    },
    amtAndCgy: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        flex: 1

    }, amount: {
        fontSize: 22,
        fontWeight: '400'

    }, category: {
        color: '#767474',
        fontSize: 15,
        fontFamily: '400',
        textTransform: 'capitalize'
    }
})