import { StyleSheet } from "react-native";
import { screenWidth } from "../../utils/screenDimen";

export const styles = StyleSheet.create({
    transactionCard: {
        backgroundColor: 'white',
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
    swipeBtn: {
        backgroundColor: 'rgba(127,61,255,0.1)',
        padding: 15,
        marginHorizontal: 10,
        borderRadius: 50
    }, overlayContainer: {
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    overlayInner: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 5,
        width: screenWidth / 1.3,
        paddingVertical: 20,
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingHorizontal: 10,
    },
    overlayInnerErrText: {
        fontFamily: '500',
        color: 'red',
        fontSize: 18,
        textAlign: 'center'
    },
    confirmDeleteHeading: {
        fontFamily: '500',
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 16
    },
    confirmDeleteBtns: {
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 10
    }, confirmDeleteBtn: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    }, confirmDeleteBtnText: {
        fontFamily: '400',
        color: 'white'
    }
})