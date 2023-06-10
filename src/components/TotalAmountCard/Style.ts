import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        borderRadius: 25,
        flex: 1,
        padding: 15,
        flexDirection: 'row'
    },
    expenses:{
        backgroundColor: '#FD3C4A'
    },
    income:{
        backgroundColor: '#00A86B'
    },
    icons: {
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 6,
    },
    icon: {
        margin: -4
    },
    content: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    type: {
        color: '#FCFCFC',
        fontSize: 14,
        fontFamily: '500',
        textTransform: 'capitalize'
    }, amount: {
        color: 'white',
        fontSize: 22,
        fontFamily: '600'
    }
})