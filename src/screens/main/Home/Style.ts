import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#A89696'
    },
    upper: {
        paddingBottom: 30,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 23,
        paddingVertical: 23,
        borderColor: '#525252',
        borderWidth: 0,
        borderBottomWidth: 1
    },
    avatarAndName:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 32,
        height: 32,
        borderColor: '#7F3DFF',
        borderRadius: 16,
        borderWidth: 1.5,
        marginRight: 10
    },
    name: {
        fontSize: 14,
        fontFamily: '400'
    },
    amounts: {
        paddingVertical: 25,
    },
    acctBalTitle: {
        color: '#91919F',
        fontFamily: '500',
        textAlign: 'center',
        marginVertical: 10
    },
    acctBalAmt: {
        fontSize: 40,
        fontFamily: '600',
        textAlign: 'center'
    },
    durationsTabContainer: {
        flexDirection: 'row',
        marginVertical: 25,
        marginHorizontal: 7,
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 16
    },
    recentTransHeader:{
        flexDirection: 'row',
        marginHorizontal: 18,
        justifyContent: 'space-between',
        marginBottom: 25
    },
    rtHText: {
        fontSize: 14,
        fontFamily: '400'
    },
    recentTransactionList: {
        paddingHorizontal: 18
    }

})