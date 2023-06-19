import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        borderRadius: 25,
        flex: 1,
        padding: 10,
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
        paddingHorizontal: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 6,
    },
    icon: {
        margin: -4
    },
    content: {
        marginLeft: 8,
        justifyContent: 'center',
        flex: 1,
    },
    type: {
        color: '#FCFCFC',
        fontSize: 11,
        fontFamily: '500',
        textTransform: 'capitalize'
    }, amount: {
        color: 'white',
        fontSize: 18,
        fontFamily: '600'
    }
})